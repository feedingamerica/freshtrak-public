# frozen_string_literal: true

# Physical location of a agency
class Agency < ApplicationRecord
  self.table_name = 'locations'

  alias_attribute :id, :loc_id

  belongs_to :foodbank, foreign_key: :primary_fb_id,
                        inverse_of: :agencies
  belongs_to :county, foreign_key: :fips, inverse_of: :agencies
  has_many :events, foreign_key: :loc_id, inverse_of: :agency,
                    dependent: :restrict_with_exception
  has_many :event_dates, through: :events,
                         dependent: :restrict_with_exception

  default_scope { active }

  scope :active, -> { where(status_id: 1) }

  scope :by_event_date, lambda { |date|
    joins(:event_dates)
      .where(event_dates: { date: date })
  }

  scope :by_foodbank, lambda { |zip_code|
    joins(foodbank: { counties: :zip_codes })
      .where(foodbanks: { counties: { zip_codes: { zip_code: zip_code } } })
  }

  scope :by_county, lambda { |zip_code|
    joins(county: :zip_codes)
      .where(counties: { zip_codes: { zip_code: zip_code } })
  }
end
