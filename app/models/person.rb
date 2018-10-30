class Person < ApplicationRecord
	validates :name, :bio, presence: true
	has_one_attached :avatar
end
