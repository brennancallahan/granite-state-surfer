class Api::V1::UsersController < ApplicationController
before_action :authorize_user, except: [:show]

  def index
    render json: User.all
  end

  def show
    user = current_user
    render json: user
  end

end
