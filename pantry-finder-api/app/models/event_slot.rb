# frozen_string_literal: true

# A specific window of time to schedule appointments for an event_date
class EventSlot < ApplicationRecord
  alias_attribute :id, :event_slot_id

  belongs_to :event_hour, foreign_key: :event_hour_id, inverse_of: :event_slots

  default_scope { active }
  scope :active, -> { where(status_id: 1) }

  def open_slots
    capacity - reserved
  end
end
