# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


path = Rails.root.join("public/corpus/hemingway.txt")
data = []

file = File.open(path, "r") do |f|
    f.each_line do |line|
        data.push(*line.split.map(&:to_s))
    end
end

# Seed database with the unique words from the book
data.uniq.each do |word|
    begin
        Word.create!(
            :word => word,
            :from_book => "The Old Man & The Sea"
        )
    rescue StandardError => e
        puts "Rescued: #{e.inpsect}"
        next
    end
end

binding.pry