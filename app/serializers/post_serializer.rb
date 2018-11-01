class PostSerializer < ActiveModel::Serializer
  attributes :id, :break_id, :user_id, :recommended_conditions, :recommended_surfers, :additional_information, :photo_path
end
