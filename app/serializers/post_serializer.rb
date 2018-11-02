class PostSerializer < ActiveModel::Serializer
  attributes :id, :break_id, :user_id, :username, :recommended_conditions, :recommended_surfers, :additional_information, :photo_path, :created_at
end
