# frozen_string_literal: true

FactoryBot.define do
  factory :zip_code do
    zip_code { Faker::Address.zip_code[0..4] }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }

    county
  end
end
