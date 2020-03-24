# frozen_string_literal: true

# Physical location of a pantry/agency
class PantryLocation < ApplicationRecord
  self.table_name = 'locations'

  belongs_to :foodbank, foreign_key: :primary_fb_id,
                        inverse_of: :pantry_locations

  alias_attribute :id, :loc_id
end
