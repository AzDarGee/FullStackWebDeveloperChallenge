class Word < ApplicationRecord
    validates :word, presence: true
    validates :word, uniqueness: { case_sensitive: false }
end
