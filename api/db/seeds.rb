# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


path = Rails.root.join("public/corpus/hemingway.txt")

file = File.readlines(path, chomp: true)

data = []

i = 0
file.each do |line|
    data << { line: line, placement: i }
    i += 1
end

binding.pry