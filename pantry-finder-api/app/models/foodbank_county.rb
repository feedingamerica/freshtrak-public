# frozen_string_literal: true

# Joins foodbanks and counties
class FoodbankCounty < ApplicationRecord
  belongs_to :county, foreign_key: :fips, inverse_of: :foodbank_counties
  belongs_to :foodbank, foreign_key: :fb_id, inverse_of: :foodbank_counties
end
