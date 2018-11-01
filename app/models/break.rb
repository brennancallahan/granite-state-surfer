class Break < ApplicationRecord
  validates :name, presence: true
  validates :beach, presence: true
  validates :address, presence: true
  validates :beginner_friendly, :inclusion => {:in => [true, false]}
  validates :onsite_parking, :inclusion => {:in => [true, false]}
  validates :break_type, presence: true

  belongs_to :break_group
  has_many :posts

  def self.retrieve_forecast_data(break_spot)
    @forecast_data = {}
    break_group = break_spot.break_group.id
    if break_group
      @forecast_data = ForecastData.find(break_group)
    end
  end
end
