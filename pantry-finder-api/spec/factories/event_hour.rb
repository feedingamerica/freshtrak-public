# frozen_string_literal: true

FactoryBot.define do
  factory :event_hour do
    capacity { 5 }
    reserved { 0 }
    start_time_key { 1000 }
    end_time_key { 1100 }
    added_by { 0 }
    last_update_by { 0 }

    event_date
  end
end
