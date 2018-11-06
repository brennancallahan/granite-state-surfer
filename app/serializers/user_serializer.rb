class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :role, :created_at, :profile_photo, :posts
  has_many :posts
end
