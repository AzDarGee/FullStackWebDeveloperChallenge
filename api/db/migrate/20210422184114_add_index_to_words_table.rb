class AddIndexToWordsTable < ActiveRecord::Migration[6.1]
  def change
    add_index :words, :word
  end
end
