class CreateBreaks < ActiveRecord::Migration[5.2]
  def change
    create_table :breaks do |t|
      t.string :name, null: false
      t.string :beach, null: false
      t.string :address, null: false
      t.boolean :beginner_friendly, null: false
      t.boolean :onsite_parking, null: false
      t.timestamps
    end
  end
end
