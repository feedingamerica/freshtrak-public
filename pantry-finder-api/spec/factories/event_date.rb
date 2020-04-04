# frozen_string_literal: true

FactoryBot.define do
  factory :event_date do
    event_date_key { 0 }
    service_id { event.service_type.id }
    capacity { 25 }
    reserved { 0 }
    start_time_key { 1000 }
    end_time_key { 1800 }
    event_duration_hours { 1 }
    status_publish { 1 }
    accept_walkin { 1 }
    accept_reservations { 1 }
    accept_interest { 1 }
    published_date_key { 0 }
    added_by { 0 }
    last_update_by { 0 }

    event
  end
end
