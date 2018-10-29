class Break < ApplicationRecord

  validates :name, presence: true
  validates :beach, presence: true
  validates :address, presence: true
  validates :beginner_friendly, :inclusion => {:in => [true, false]}
  validates :onsite_parking, :inclusion => {:in => [true, false]}
  validates :break_type, presence: true

end
