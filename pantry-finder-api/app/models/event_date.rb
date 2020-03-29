# frozen_string_literal: true

# A date when an event is happening
class EventDate < ApplicationRecord
  alias_attribute :id, :event_date_id

  belongs_to :event, foreign_key: :event_id, inverse_of: :event_dates
end
