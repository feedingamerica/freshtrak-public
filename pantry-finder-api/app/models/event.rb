# frozen_string_literal: true

# Physical event at a location
class Event < ApplicationRecord
  alias_attribute :id, :event_id

  belongs_to :agency, foreign_key: :loc_id, inverse_of: :events
end
