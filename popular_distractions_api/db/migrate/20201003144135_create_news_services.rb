class CreateNewsServices < ActiveRecord::Migration[6.0]
  def change
    create_table :news_services do |t|

      t.timestamps
    end
  end
end
