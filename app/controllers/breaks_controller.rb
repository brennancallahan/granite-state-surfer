class BreaksController < ApplicationController

  def index
    @breaks = Break.all
  end

end
