class Post < ApplicationRecord

  mount_uploader :photo_path, PostPhotoUploader

  belongs_to :break
  belongs_to :user

  validates :recommended_conditions, presence: true
  validates :recommended_surfers, presence: true

end
