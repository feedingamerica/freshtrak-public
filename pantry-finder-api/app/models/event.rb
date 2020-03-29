# frozen_string_literal: true

# Physical event at a location
class Event < ApplicationRecord
  alias_attribute :id, :event_id

  belongs_to :agency, foreign_key: :loc_id, inverse_of: :events
  belongs_to :service_type, foreign_key: :service_id, inverse_of: :events
  has_one :service_category, through: :service_type
end
