class Api::V1::BreaksController < ApplicationController
  def index
    render json: Break.all
  end

  def show
    @break = Break.find(params[:id])
    render json: @break.to_json
  end
end
