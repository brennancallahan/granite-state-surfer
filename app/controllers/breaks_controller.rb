class BreaksController < ApplicationController
  before_action :authenticate_user!, except: [:index]


  def index
    @breaks = Break.all
  end

end
