# frozen_string_literal: true

# Foodbank, associated to many pantries
class Foodbank < ApplicationRecord
  self.table_name = 'foodbanks_mini'

  alias_attribute :id, :fb_id

  has_many :foodbank_counties, foreign_key: :fb_id, inverse_of: :foodbank,
                               dependent: :restrict_with_exception
  has_many :counties, through: :foodbank_counties,
                      dependent: :restrict_with_exception
  has_many :agencies, foreign_key: :primary_fb_id, inverse_of: :foodbank,
                      dependent: :restrict_with_exception

  default_scope { active }

  scope :active, -> { where(status_id: 1) }

  scope :by_county, lambda { |zip_code|
    joins(counties: :zip_codes)
      .where(counties: { zip_codes: { zip_code: zip_code } })
  }
end
