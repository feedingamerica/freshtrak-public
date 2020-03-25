# frozen_string_literal: true

# Physical location of a pantry/agency
class PantryLocation < ApplicationRecord
  self.table_name = 'locations'

  alias_attribute :id, :loc_id

  belongs_to :foodbank, foreign_key: :primary_fb_id,
                        inverse_of: :pantry_locations

  scope :serving, -> (zip_code) {
    joins(foodbank: { counties: :zip_codes })
      .where(foodbanks: { counties: { zip_codes: { zip_code: zip_code } } })
  }
end
