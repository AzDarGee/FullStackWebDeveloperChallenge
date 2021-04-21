class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :text
      t.string :book

      t.timestamps
    end

    add_index :words, "to_tsvector('english', word)", using: :gin, name: 'words_idx'
  end
end
