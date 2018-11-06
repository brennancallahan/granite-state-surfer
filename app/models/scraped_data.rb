# unclear on use


require 'nokogiri'
require 'httparty'

class ShopForecast

  def self.find(break_group_id)

    if break_group_id == 1

    url = 'http://cinnamonrainbows.com/surf-cam-report'
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page)

    @shop_forecast = parsed_page.css(".forecast").text.strip

  elsif
     break_group_id == 2

    url = 'http://www.pioneersboardshop.com/surf-cam-report-nh/'
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page)

    @shop_forecast = parsed_page.css(".p+ .shortcode1-2 h3+ p strong:nth-child(1)").text.strip

  end

  end
