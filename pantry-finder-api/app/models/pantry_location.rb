# frozen_string_literal: true

# Physical location of a pantry/agency
class PantryLocation < ApplicationRecord
  self.table_name = 'locations'

  alias_attribute :id, :loc_id

  belongs_to :foodbank, foreign_key: :primary_fb_id,
                        inverse_of: :pantry_locations

  scope :serving, -> (zip_code) {
    where(primary_fb_id: ZipCode.find_by(zip_code: zip_code).county.foodbanks.select(:id))
  }
end
