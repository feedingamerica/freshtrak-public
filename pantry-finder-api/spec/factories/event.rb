# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    event_name { 'Pantry' }
    zip { agency.zip }
    city { agency.city }
    state { agency.state }
    address1 { agency.address1 }
    address2 { agency.address2 }
    service_zips { '' }
    last_schedule_mgmt_datekey { 0 }
    status_id { 1 }
    status_publish_event { 1 }
    status_publish_event_dates { 1 }
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
    service_type
  end
end
