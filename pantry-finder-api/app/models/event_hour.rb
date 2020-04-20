# frozen_string_literal: true

# The Hour of time that is part of an EventDate and contains EventSlots
class EventHour < ApplicationRecord
  alias_attribute :id, :event_hour_id

  belongs_to :event_date, foreign_key: :event_date_id, inverse_of: :event_hours
  has_many :event_slots, foreign_key: :event_hour_id, inverse_of: :event_hour,
                         dependent: :restrict_with_exception

  default_scope { active }
  scope :active, -> { where(status_id: 1) }

  def open_slots
    capacity - reserved
  end
end
