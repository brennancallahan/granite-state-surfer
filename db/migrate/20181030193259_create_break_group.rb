class CreateBreakGroup < ActiveRecord::Migration[5.2]
  def change
    create_table :break_groups do |t|
      t.string :name, null: false
      t.integer :break_group, null: false

      t.timestamps
    end
  end
end
