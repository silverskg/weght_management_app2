class CreateGraphs < ActiveRecord::Migration[5.2]
  def change
    create_table :graphs do |t|
      t.date :date
      t.float :weight
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
