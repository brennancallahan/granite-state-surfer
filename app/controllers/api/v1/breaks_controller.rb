class Api::V1::BreaksController < ApplicationController
  def index
    render json: Break.all
  end

  def show
    @break = Break.find(params[:id])
    forecast_data = Break.retrieve_forecast_data(@break)
    render json: { break: BreakSerializer.new(@break), forecast_data: forecast_data, current_user: current_user }
  end
end






# @break.retrieve_forecast_data
