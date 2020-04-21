# frozen_string_literal: true

# zip codes the agency services through events
class EventZipCode < ApplicationRecord
  self.table_name = 'event_service_geographies'

  alias_attribute :id, :esg_id
  alias_attribute :zip_code, :geo_value

  has_many :events, primary_key: :event_id, foreign_key: :event_id,
                    inverse_of: :event_zip_codes,
                    dependent: :restrict_with_exception

  has_many :agencies, through: :events

  default_scope { zip_code.active }
  scope :zip_code, -> { where(geo_type_id: 1) }
  scope :active, -> { where(status_id: 1) }
end
