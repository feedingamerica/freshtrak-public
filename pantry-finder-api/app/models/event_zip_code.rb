# frozen_string_literal: true

# Association between events and zip code values
#   The underlying table maps to other geography types
#   but this model scopes to zip codes by default
class EventZipCode < ApplicationRecord
  self.table_name = 'event_service_geographies'

  alias_attribute :id, :esg_id
  alias_attribute :zip_code, :geo_value

  belongs_to :event, foreign_key: :event_id, inverse_of: :event_zip_codes
  has_one :agency, through: :event

  default_scope { zip_code_type.active }
  scope :zip_code_type, -> { where(geo_type_id: 1) }
  scope :active, -> { where(status_id: 1) }
end
