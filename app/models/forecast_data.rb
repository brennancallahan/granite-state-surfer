require 'httparty'

class ForecastData

  def self.find(break_group_id)

    if break_group_id == 1
      response = HTTParty.get("http://magicseaweed.com/api/#{ENV["MSW_KEY"]}/forecast/?spot_id=2074&units=us")
    elsif break_group_id == 2
      response = HTTParty.get("http://magicseaweed.com/api/#{ENV["MSW_KEY"]}/forecast/?spot_id=881&units=us")
    end

    forecast_data = response[0]
    new_hash = {
      solidRating: forecast_data["solidRating"],
      fadedRating: forecast_data["fadedRating"],
      minBreakingHeight: forecast_data["swell"]["minBreakingHeight"],
      maxBreakingHeight: forecast_data["swell"]["maxBreakingHeight"],
      windspeed: forecast_data["wind"]["speed"],
      windDirection: forecast_data["wind"]["compassDirection"]
    }
  end
end
