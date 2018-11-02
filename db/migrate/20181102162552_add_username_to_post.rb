class AddUsernameToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :username, :string, null: false
  end
end
