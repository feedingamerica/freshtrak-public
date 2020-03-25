# frozen_string_literal: true

# Physical location of a pantry/agency
class PantryLocation < ApplicationRecord
  self.table_name = 'locations'

  alias_attribute :id, :loc_id

  belongs_to :foodbank, foreign_key: :primary_fb_id,
                        inverse_of: :pantry_locations
  belongs_to :county, foreign_key: :fips, inverse_of: :pantry_locations

  scope :serving_foodbank, -> (zip_code) {
    joins(foodbank: { counties: :zip_codes })
      .where(foodbanks: { counties: { zip_codes: { zip_code: zip_code } } })
      .active
  }

  scope :serving_county, -> (zip_code) {
    joins(county: :zip_codes)
      .where(counties: { zip_codes: { zip_code: zip_code } })
      .active
  }

  scope :active, -> { where(status_id: 1) }
end
