class Api::V1::BuoydatasController < ApplicationController

  def index
    seed_db
    render json: Buoydata.all, adapter: :json
  end

  def seed_db
    Buoydata.delete_all
    Buoydata.reset_pk_sequence
    Buoydata.api_seed
  end

end
