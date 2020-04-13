# frozen_string_literal: true

# Geographical County
class County < ApplicationRecord
  self.table_name = 'CNTY'

  alias_attribute :fips, :FIPS

  has_many :zip_codes, foreign_key: :fips, inverse_of: :county,
                       dependent: :restrict_with_exception
  has_many :foodbank_counties, foreign_key: :fips, inverse_of: :county,
                               dependent: :restrict_with_exception
  has_many :foodbanks, through: :foodbank_counties,
                       dependent: :restrict_with_exception
  has_many :agencies, foreign_key: :fips, inverse_of: :county,
                      dependent: :restrict_with_exception
end
