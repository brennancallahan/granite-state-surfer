class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def new
    post = Post.new
    render json: {post: post}
  end

  def create
    post = params
    if current_user != nil
      post = Post.new(post_params)
    else
      render json: { error: 'You must be logged in to post!' }, status: :unprocessable_entity
    end

    binding.pry

    if post.save
      render json: { post: post}, adapter: :json
    else
      render json: { error: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    if current_user.id == post.user_id
      post.destroy
    else
      render json: { error: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:recommended_conditions, :recommended_surfers, :additional_information, :photo_path, :break_id, :user_id, :username, :created_at)
  end
end
