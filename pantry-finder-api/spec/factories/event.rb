# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    service_zips { '' }
    last_schedule_mgmt_datekey { 0 }
    status_publish_event { 0 }
    status_publish_event_dates { 0 }
    d_trend_month { '' }
    d_trend_week { '' }
    sc_monthly_10 { '' }
    sc_monthly_15 { '' }
    sc_monthly_20 { '' }
    sc_monthly_25 { '' }
    sc_monthly_30 { '' }
    sc_monthly_35 { '' }
    sc_monthly_40 { '' }
    latitude { agency&.latitude || Faker::Address.latitude }
    longitude { agency&.longitude || Faker::Address.longitude }
    tamu_latitude { latitude }
    tamu_longitude { longitude }
    pt_latitude { latitude }
    pt_longitude { longitude }
    utc_offset { 0 }

    agency
  end
end
