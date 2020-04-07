# frozen_string_literal: true

FactoryBot.define do
  factory :agency do
    loc_num { 0 }
    loc_name { Faker::Company.name }
    loc_nickname { loc_name }
    zip_plus4 { Faker::Address.zip }
    zip { zip_plus4[0..4] }
    city { Faker::Address.city }
    state { Faker::Address.state }
    address1 { Faker::Address.street_address }
    address2 { Faker::Address.secondary_address }
    phone { Faker::PhoneNumber.phone_number }
    msa { 0 }
    cbsa { 0 }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    tamu_latitude { latitude }
    tamu_longitude { longitude }
    school_dis_num { 0 }
    address_status_id { 1 }
    last_geocode_date_key { Time.now.to_i }
    tamu_geo_match_type_id { 0 }
    smarty_geo_match_type_id { 0 }
    pt_geo_match_type_id { 0 }
    census_block { 0 }
    census_block_group { 0 }
    census_tract { 0 }
    time_zone { 'Eastern Time (US & Canada)' }
    utc_offset { 5 }
    dst { 0 }
    alt_fb_ids { '' }
    zip3_zones2 { 0 }
    future3 { 0 }
    future4 { 0 }
    future5 { 0 }
    future6 { 0 }
    fb_rank { 0 }
    fb_rank_county { 0 }
    fb_tier { 0 }
    fb_tier_county { 0 }
    billing_status_id { 0 }
    billing_note_external { 0 }
    contract_user_id { 0 }
    privacy_bypass_status_id { 0 }
    logo { 0 }
    d_date_key { 0 }
    d_last_year { 0 }
    d_last_90_days { 0 }
    d_this_month { 0 }
    d_trend_month { 0 }
    d_trend_week { 0 }
    sc_date_key { 0 }
    sc_monthly_10 { 0 }
    sc_monthly_15 { 0 }
    sc_monthly_20 { 0 }
    sc_monthly_25 { 0 }
    sc_monthly_30 { 0 }
    sc_monthly_35 { 0 }
    sc_monthly_40 { 0 }
    date_added { Date.today }
    last_update_by { 0 }

    county
    foodbank
  end
end
