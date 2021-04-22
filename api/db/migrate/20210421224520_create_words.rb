class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.text :text
      t.json :book_words
      t.string :book_title

      t.timestamps
    end

  end
end

