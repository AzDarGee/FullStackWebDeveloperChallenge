class CreateWordsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :word
      t.string :from_book

      t.timestamps
    end
  end
end
