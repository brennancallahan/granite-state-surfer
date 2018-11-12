class Buoydata < ApplicationRecord

require 'nokogiri'
require 'open-uri'
require 'pry'

  # validates :time, presence: true
  # validates :height, presence: true
  # validates :period, presence: true

  return_of_uri = open('https://www.ndbc.noaa.gov/station_page.php?station=44098')
  @page = Nokogiri::HTML(return_of_uri)

  def self.api_seed

    @buoydata = Buoydata.new
    @times_arr = []
    @heights_arr = []
    @periods_arr = []

    @times = @page.css(".dataTable:nth-child(9) tr:nth-child(10) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(9) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(8) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(7) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(6) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(5) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(4) td:nth-child(3) , .dataTable:nth-child(9) tr:nth-child(3) td:nth-child(3)").text.strip
    @times_arr = @times.split("m")


    @heights = @page.css(".dataTable:nth-child(9) tr:nth-child(10) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(9) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(8) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(7) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(6) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(5) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(4) td:nth-child(7) , .dataTable:nth-child(9) tr:nth-child(3) td:nth-child(7)").text.strip
    @heights_arr = @heights.split(" ")


    @periods = @page.css(".dataTable:nth-child(9) tr:nth-child(10) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(9) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(8) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(7) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(6) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(5) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(4) td:nth-child(8) , .dataTable:nth-child(9) tr:nth-child(3) td:nth-child(8)").text.strip
    @periods_arr = @periods.split(" ")

    counter = 0
    while counter < @times_arr.length do
      Buoydata.create(time: @times_arr[counter], height: @heights_arr[counter].to_f, period: @periods_arr[counter])
      counter += 1
    end
  end
end
