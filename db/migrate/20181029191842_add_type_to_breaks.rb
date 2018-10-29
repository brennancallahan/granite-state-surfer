class AddTypeToBreaks < ActiveRecord::Migration[5.2]
  def change
    add_column :breaks, :break_type, :string, null: false
  end
end
