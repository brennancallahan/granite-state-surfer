class CreatePost < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string "recommended_conditions", null: false
      t.string "recommended_surfers", null: false
      t.string "additional_information"
      t.string "photo_path"

      t.belongs_to :break, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
