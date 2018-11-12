class CreateBuoydata < ActiveRecord::Migration[5.2]
  def change
    create_table :buoydata do |t|
      t.string :time, null: false
      t.float :height, null: false
      t.integer :period, null: false
      t.timestamps
    end
  end
end
