class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :preview_path
      t.string :thumbnail_path
      t.string :client_name
      t.string :description
      t.string :stack
      t.string :teaser

      t.timestamps
    end
  end
end
