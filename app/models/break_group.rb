class BreakGroup < ApplicationRecord
  validates :name, presence: true
  validates :break_group, presence: true
  has_many :breaks


end
