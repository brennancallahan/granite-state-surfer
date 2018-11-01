class BreakSerializer < ActiveModel::Serializer
  attributes :id, :name, :beach, :address, :beginner_friendly, :onsite_parking, :break_type, :break_group, :posts
  has_many :posts
end
