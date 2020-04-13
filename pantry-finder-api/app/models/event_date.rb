# frozen_string_literal: true

# A date when an event is happening
class EventDate < ApplicationRecord
  alias_attribute :id, :event_date_id
  alias_attribute :date, :event_date_key

  belongs_to :event, foreign_key: :event_id, inverse_of: :event_dates

  default_scope { active.published.event_publishes_dates.future }
  scope :active, -> { where(status_id: 1) }
  scope :event_publishes_dates, lambda {
    joins(:event).merge(Event.publishes_dates)
  }
  scope :published, lambda {
    where('published_date_key <= ?', Date.today.to_s.delete('-'))
      .where(status_publish: 1)
  }
  scope :future, lambda {
    where('event_date_key >= ?', Date.today.to_s.delete('-'))
  }
end
