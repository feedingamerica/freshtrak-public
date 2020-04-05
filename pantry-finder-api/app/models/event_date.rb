# frozen_string_literal: true

# A date when an event is happening
class EventDate < ApplicationRecord
  alias_attribute :id, :event_date_id
  alias_attribute :date, :event_date_key

  belongs_to :event, foreign_key: :event_id, inverse_of: :event_dates

  default_scope { active.published.future }
  scope :active, -> { where(status_id: 1) }
  scope :published, -> { where(status_publish: 1) }
  scope :future, lambda {
    where('event_date_key >= ?', Time.zone.today.to_s.delete('-'))
  }
end
