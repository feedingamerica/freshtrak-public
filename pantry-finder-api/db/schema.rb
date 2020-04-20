# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "CNTY", primary_key: "FIPS", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci", comment: "list of all counties in the US, we use this table in the ETL process each December that downloads all the ACS data, county by county", force: :cascade do |t|
    t.string "NAME", limit: 25
    t.string "STATE", limit: 2
    t.string "fips_five_digit", limit: 5
    t.string "state_num_two_digit", limit: 2
    t.string "county_num_three_digit", limit: 3
    t.string "T_Z", limit: 2
    t.string "CNTY_TYPE", limit: 1
    t.string "COUNTYSEAT", limit: 28
    t.string "NAME_TYPE", limit: 1
    t.integer "ELEVATION"
    t.decimal "PERNS_HOUS", precision: 6
    t.integer "POPULATION"
    t.integer "AREA_SQ_MI"
    t.integer "HOUSEHOLDS"
    t.integer "WHITE"
    t.integer "BLACK"
    t.integer "HISPANIC"
    t.integer "INCOM_HHLD"
    t.integer "HOUSE_VAL"
    t.string "etl_name", default: "", null: false
    t.integer "etl_status_id", limit: 1, default: 0, null: false, unsigned: true
    t.integer "etl_status_id_county", limit: 1, default: 0, null: false, unsigned: true
    t.integer "etl_status_id_tract", limit: 1, default: 0, null: false, unsigned: true
    t.integer "etl_status_id_bg", limit: 1, default: 0, null: false, unsigned: true
    t.integer "etl_batch_id", default: 0, null: false, unsigned: true
    t.string "flag1", limit: 50, default: "", null: false
    t.string "flag2", limit: 50, default: "", null: false
    t.integer "fb_id", default: 0, null: false, comment: "fb_id of the feeding america foodbank that owns this county ", unsigned: true
    t.integer "fb_id_shared", comment: "fb_id of the second foodbank that shares this county", unsigned: true
    t.integer "is_shared_county", default: 0, comment: "boolean flag to counties that are owned by two foodbanks", unsigned: true
    t.string "rural_contiguous", limit: 20
    t.integer "tract_count", default: 0, null: false, comment: "from the 2010 census, the number of tracts in this county", unsigned: true
    t.integer "bg_count", default: 0, null: false, comment: "from the 2010 census, the number of block groups in this county", unsigned: true
    t.integer "block_count", default: 0, null: false, comment: "from the 2010 census, the number of blocks in this county", unsigned: true
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "added_by", default: 0, null: false, unsigned: true
    t.datetime "last_update", default: -> { "CURRENT_TIMESTAMP" }
    t.integer "last_update_by", unsigned: true
    t.integer "status_id", limit: 1, default: 1
    t.index ["fips_five_digit"], name: "fivedigitfips"
  end

  create_table "dim_dates", primary_key: "date_key", id: :integer, unsigned: true, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.date "date_m"
    t.string "FullDate", limit: 10
    t.string "DateName", limit: 10
    t.integer "DayOfWeek", limit: 1, unsigned: true
    t.string "DayNameOfWeek", limit: 20
    t.integer "nthDow", limit: 1, comment: "the nth day of the week. E.g. 1st Monday, 2nd Monday, 3rd Tuesday, etc...", unsigned: true
    t.integer "DayOfMonth", limit: 1, unsigned: true
    t.integer "DayOfYear", limit: 2, unsigned: true
    t.string "WeekdayWeekend", limit: 20
    t.integer "SunWeekOfYear", limit: 1, unsigned: true
    t.integer "SunYearWeek", limit: 3, unsigned: true
    t.integer "MonWeekOfYear", limit: 1, unsigned: true
    t.integer "MonYearWeek", limit: 3, unsigned: true
    t.string "MonthName", limit: 20
    t.integer "MonthOfYear", limit: 1, unsigned: true
    t.string "IsLastDayOfMonth", limit: 1
    t.string "IsPublicHoliday", limit: 1, comment: "is this a pulick dfkadsf df d fads ff asdf sad fsd fas df sd fsd sda fkjasdklfj;lsdjfkl;asd jfl; dslk dlfkj jsdkl; jl;kdsjf l;kdsjfl;k jasdl;kf jl;kasdjlk;jsa"
    t.string "IsPublicHolidayDescription", limit: 40
    t.integer "CalendarQuarter", limit: 1, unsigned: true
    t.integer "CalendarYear", limit: 2, unsigned: true
    t.integer "CalendarYearMonth", limit: 3, unsigned: true
    t.string "CalendarYearMonthDashed", limit: 7
    t.string "CalendarYearQtr", limit: 6
    t.integer "JulFiscalMonthOfYear", limit: 1, unsigned: true
    t.integer "JulFiscalQuarter", limit: 1, unsigned: true
    t.integer "JulFiscalYear", limit: 2, unsigned: true
    t.string "JulFiscalYearMonth", limit: 9
    t.string "JulFiscalYearQtr", limit: 8
    t.integer "OctFiscalMonthOfYear", limit: 1, unsigned: true
    t.integer "OctFiscalQuarter", limit: 1, unsigned: true
    t.integer "OctFiscalYear", limit: 2, unsigned: true
    t.string "OctFiscalYearMonth", limit: 9
    t.string "OctFiscalYearQtr", limit: 8
    t.integer "AprFiscalMonthOfYear", limit: 1, unsigned: true
    t.integer "AprFiscalQuarter", limit: 1, unsigned: true
    t.integer "AprFiscalYear", limit: 2, unsigned: true
    t.string "AprFiscalYearMonth", limit: 9
    t.string "AprFiscalYearQtr", limit: 8
    t.integer "UTCMonth", limit: 1, unsigned: true
  end

  create_table "dim_minutes", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.integer "minute_key", limit: 1
    t.string "minute_common", limit: 2
    t.string "minute_2", limit: 2
    t.string "minute_3", limit: 2
    t.string "minute_4", limit: 2
    t.string "minute_5", limit: 2
    t.string "minute_6", limit: 2
    t.string "minute_10", limit: 2
    t.string "minute_12", limit: 2
    t.string "minute_15", limit: 2
    t.string "minute_20", limit: 2
    t.string "minute_30", limit: 2
    t.string "minute_60", limit: 2
  end

  create_table "dim_times", primary_key: "time_key", id: :integer, unsigned: true, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", comment: "Table that holds the time dimension linking to timekey in other tables", force: :cascade do |t|
    t.integer "minute_of_day", null: false, comment: "the minute of the day. minutes past midnight.", unsigned: true
    t.integer "hour_of_day", null: false, unsigned: true
    t.string "short_time", limit: 5, null: false
    t.string "AM_PM", limit: 2, null: false, comment: "is the time in the AM or PM "
    t.string "military_time", limit: 5, null: false
    t.time "mysql_time", null: false
    t.string "common_time", limit: 10, null: false
    t.integer "minute_key", null: false, unsigned: true
    t.integer "batch_id", null: false, unsigned: true
    t.datetime "date_added"
    t.integer "added_by", null: false, unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", default: 1, null: false, unsigned: true
  end

  create_table "event_dates", primary_key: "event_date_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "Record of when the event is offering their services. Used to manage capacity, generate event_hours and event_slots, and other notes.", force: :cascade do |t|
    t.integer "esp_id", default: 0, null: false, comment: "The event_service_profile this event_date is linked to. All event_dates should be linked at least through an ad hoc profile."
    t.integer "event_id", null: false, unsigned: true
    t.integer "event_date_key", null: false, unsigned: true
    t.integer "service_id", null: false, comment: "The service type being provided at the event. Default comes from event->event_service_profile but allows for customization. e.g. Event normally does produce, but on one distribution they will give out turkeys + produce."
    t.integer "capacity", null: false, comment: "The total number of appointments that can be scheduled in event_slots that roll up to this event_date record. e.g. 100. Capacity is evenly divided among the connected event_hours scaled to their length (e.g. a half hour gets half as many appointments as a full hour)."
    t.integer "reserved", null: false, comment: "The total number of appointments that have been scheduled in event_slots that roll up to this event_date record. e.g. 80. This number should always be less than or equal to the capcity number."
    t.integer "start_time_key", null: false, comment: "The start time of the distribution. Usually an hour start, but can be any valid timekey from the dim_times table", unsigned: true
    t.integer "end_time_key", null: false, comment: "The end time of the distribution. Usually an hour end, but can be any valid timekey from the dim_times table", unsigned: true
    t.decimal "event_duration_hours", precision: 4, scale: 2, null: false, comment: "Provides an accurate way to sum up a column and state how long an agency is open for a day, accounts well for half hours, 15 of 60 minute hours, etc..."
    t.integer "slot_length_minutes", default: 60, null: false, comment: "The length in minutes of the distribution slots tied to the distribution hour records of this distribution date record. e.g. If a distribution operates with four 15 minute slots of time per hour, this value would be 15.", unsigned: true
    t.integer "status_publish", limit: 1, null: false, comment: "Controls whether this event_date is published or not.", unsigned: true
    t.integer "accept_walkin", limit: 1, null: false, comment: "Whether this event_date is eligible for walkins or not.", unsigned: true
    t.integer "accept_reservations", limit: 1, null: false, comment: "Whether this event_date accepts reservations or not.", unsigned: true
    t.integer "accept_interest", limit: 1, null: false, comment: "Whether this event_date accepts general interest or not.", unsigned: true
    t.integer "published_date_key", null: false, comment: "The date the entry is allowed to be shown to the public.", unsigned: true
    t.datetime "date_added", null: false
    t.integer "published_end_date_key", default: 0, null: false, comment: "The date the entry stops being published.", unsigned: true
    t.integer "published_end_time_key", default: 0, null: false, comment: "The time the entry stops being published", unsigned: true
    t.string "public_registration_url", default: "", null: false, comment: "URL for customers to go and register themselves for a distribution"
    t.string "private_registration_url", default: "", null: false, comment: "URL for 3rd parties to go and register customers through."
    t.integer "mobile_serve_user_id", default: 0, null: false, comment: "The user_id that mobile logins go under", unsigned: true
    t.string "mobile_serve_login_hash", default: "", null: false, comment: "The login hash that a login QR code is generated from"
    t.integer "added_by", null: false, unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", default: 1, null: false, unsigned: true
  end

  create_table "event_geography_profiles", primary_key: "egp_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", comment: "The geographies an agency does and does not serve along with notes", force: :cascade do |t|
    t.integer "event_id", default: 0, null: false, comment: "Event ID this esg record applies to.", unsigned: true
    t.integer "geo_profile_type_id", limit: 1, default: 1, null: false, comment: "The type of geography this respresents, e.g. specific zip codes, all zip codes in CNTY, etc... ", unsigned: true
    t.string "geo_profile_value", limit: 100, collation: "utf8_general_ci", comment: "The geography value matched with the geo_profile_type_id, e.g. All zip codes in Franklin County Ohio would be represnted by geo_profile_type_id = 2 & geo_value = 39049."
    t.string "exception_note", comment: "Short note to feed to customers if there is an exception. E.g. (We serve 43046 but only in Fairfield County)"
    t.text "notes", collation: "utf8_general_ci", comment: "Additional Notes to feed out to customers to help them understand specific limitations not captured through this data."
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", null: false, comment: "user_id of the person that created this record", unsigned: true
    t.datetime "last_update", null: false
    t.integer "last_update_by", null: false, comment: "user_id of the last person to update this record", unsigned: true
    t.integer "status_id", limit: 1, default: 1, null: false, comment: "status of the record, uses codes from table status_codes", unsigned: true
    t.index ["event_id", "status_id"], name: "event_id_and_status"
    t.index ["geo_profile_type_id", "geo_profile_value"], name: "geo_types_values"
    t.index ["geo_profile_value"], name: "geo_values"
    t.index ["status_id"], name: "status_id"
  end

  create_table "event_hours", primary_key: "event_hour_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "Record of what hours, connected to the event_dates, are available to order on, with controls for capacity. Also allows for split shifts and early closures because of low reservations.", force: :cascade do |t|
    t.integer "event_date_id", null: false, unsigned: true
    t.integer "capacity", null: false, comment: "The total number of appointments that can be scheduled in event_slots that roll up to this event_hour record. e.g. 25"
    t.integer "reserved", null: false, comment: "The total number of appointments that have been scheduled in event_slots that roll up to this event_hour record. e.g. 20. This number should always be less than or equal to the capacity number."
    t.integer "start_time_key", null: false, comment: "The start time of the event_hour. Usually an hour start, but can be any valid timekey from the dim_times table", unsigned: true
    t.integer "end_time_key", null: false, comment: "The end time of the event_hour. Usually an hour end, but can be any valid timekey from the dim_times table"
    t.decimal "duration_hours", precision: 4, scale: 2, default: "1.0", null: false, comment: "Provides an accurate way to sum up a column and state how long an agency is open for a day, accounts well for half hours, 15 of 60 minute hours, etc...", unsigned: true
    t.datetime "date_added"
    t.integer "added_by", null: false, unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", default: 1, null: false, unsigned: true
  end

  create_table "event_service_geographies", primary_key: "esg_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", comment: "The geographies an agency does and does not serve along with", force: :cascade do |t|
    t.integer "egp_id", default: 0, null: false, comment: "The event geography profile record that generated this event_service_geography", unsigned: true
    t.integer "event_id", default: 0, null: false, comment: "Event ID this esg record applies to.", unsigned: true
    t.integer "geo_type_id", limit: 1, default: 1, null: false, comment: "1-zip code , others from AT file select_list_arrays", unsigned: true
    t.string "geo_value", limit: 100, collation: "utf8_general_ci", comment: "The geography value matched with the geo_type_id, e.g. Zip Code 43123 would be represnted by geo_type_id = 1 & geo_value = 43123."
    t.integer "trigger_exception_note", limit: 1, default: 0, null: false, comment: "If this is turned on, a text field from the event_geography_profile is shown (e.g. We serve zip code 43046 but only in Fairfield County)", unsigned: true
    t.text "notes", collation: "utf8_general_ci", comment: "Additional Notes to feed out to customers to help them understand specific limitations not captured through this data."
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", null: false, comment: "user_id of the person that created this record", unsigned: true
    t.datetime "last_update", null: false
    t.integer "last_update_by", null: false, comment: "user_id of the last person to update this record", unsigned: true
    t.integer "status_id", limit: 1, default: 1, null: false, comment: "status of the record, uses codes from table status_codes", unsigned: true
    t.index ["egp_id"], name: "event_geography_profile"
    t.index ["event_id", "geo_type_id", "status_id"], name: "event_geotype_status"
    t.index ["event_id", "status_id"], name: "event_id_and_status"
    t.index ["geo_type_id", "geo_value"], name: "geo_types_values"
    t.index ["geo_value"], name: "geo_values"
    t.index ["status_id"], name: "status_id"
  end

  create_table "event_service_profiles", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.integer "event_id", null: false, comment: "The event_id the event_service_profile belongs to"
    t.integer "service_id", comment: "The default service type provided through the event"
    t.integer "frequency_type_id", comment: "Frequency, e.g. Every, 1st, 2nd, etc..."
    t.integer "dayofweek_id", comment: "Id for the day of the Week, Weekdays, Weekends, etc..."
    t.integer "start_timekey", comment: "start_timekey of the distribution"
    t.integer "end_timekey", comment: "end_timekey of the distribution"
    t.integer "capacity_type", limit: 1, default: 1, null: false, comment: "(future design) the default capacity type for the event_date. Default is services, but could also choose children, seniors, etc... if you have an age specifc service that is not 1-1 with a service event. "
    t.integer "default_capacity_daily", comment: "The default daily capacity value for the event_dates generated from the schedule profile. e.g. 100"
    t.integer "time_shift_id", comment: "(future design) MHM had used this to shift schedules forward or backward depending on some conditions."
    t.integer "generate_status_id", comment: "Controls if the event_service_profile will generate dates or not. Use this status for when an event_service_profile is in a draft state, then change to generate when it is ready to start making dates."
    t.integer "publish_status_id", null: false, comment: "Controls if the Profile is Published or not. "
    t.integer "status_publish_event_dates", limit: 1, null: false, comment: "Default setting for whether event_dates generated from this service_profile are published", unsigned: true
    t.integer "ed_accept_walkin", limit: 1, default: 0, null: false, comment: "Default setting for event_datese whether they accept walkins or not.", unsigned: true
    t.integer "ed_accept_resesrvations", limit: 1, default: 0, null: false, comment: "Default setting for event_dates whether they accept reservations or not.", unsigned: true
    t.integer "ed_accept_interest", limit: 1, default: 0, null: false, comment: "Default setting for event_dates whether they accept interest in their distribution or not.", unsigned: true
    t.string "published_desc_short", comment: "Short description (for menus etc...) that shows when a customer makes an appointment or views information on a map. Also shows when a user selects a timeslot."
    t.string "published_desc_long", comment: "Long description (for popups etc... ) that shows when a customer makes an appointment or views information in a menu. Replicated onto each event_date and painted in the event_details box when a customer his view_details. Could also show on the appointment confirmation screen."
    t.integer "active_date_key", null: false, comment: "The first date an event_date generated from this event can be on. e.g. if the value is 03/26/2020 no schedules can be created before this date for this event_service_profile"
    t.integer "inactive_date_key", default: 99999999, null: false, comment: "The last date an event_date generated from this event_service_profile could be generated on. All generated dates from this schedule must be <= this date."
    t.integer "last_generate_date_key", null: false, comment: "The datekey of the last time TASD records were checked or generated from this schedule profile ID."
    t.datetime "date_added"
    t.integer "added_by"
    t.datetime "last_update"
    t.integer "last_update_by"
    t.integer "status_id", default: 1, null: false
  end

  create_table "event_slots", primary_key: "event_slot_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "Record of a slot of time that appointments can be scheduled into.", force: :cascade do |t|
    t.integer "event_hour_id", null: false, unsigned: true
    t.integer "capacity", null: false, comment: "The total number of appointments that can be scheduled in this event_slot e.g. 6 (100 event_date capacity / 4 hours = 25 appointments per hour. 25 appointments per hour / (60 minutes per hour / 15 minutes per slot) = 6.25 = 6 appointments per slot."
    t.integer "reserved", null: false, comment: "The total number of appointments that have been scheduled in this event_slots e.g. 5. This number should always be less than or equal to the capacity number."
    t.integer "start_time_key", null: false, comment: "The start time of the event_slot. Usually an hour start, but can be any valid timekey from the dim_times table", unsigned: true
    t.integer "end_time_key", null: false, comment: "The end time of the event_slot. Usually an hour end, but can be any valid timekey from the dim_times table"
    t.integer "duration_minutes", limit: 1, null: false, comment: "The length of the event_slot in minutes", unsigned: true
    t.datetime "date_added"
    t.integer "added_by", null: false, unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", default: 1, null: false, unsigned: true
  end

  create_table "events", primary_key: "event_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci", comment: "programs operated by locations (agencies), each has a specific default type of service (service_type_id)", force: :cascade do |t|
    t.integer "event_num", default: 0, null: false
    t.string "event_name", limit: 80, default: "", null: false
    t.string "event_nickname", limit: 40, default: "", null: false
    t.integer "event_type_id", limit: 1, default: 0, null: false, unsigned: true
    t.date "event_special_date"
    t.text "service_zips", null: false
    t.integer "loc_id", limit: 3, default: 0, null: false, unsigned: true
    t.string "fb_agency_num", limit: 20, default: "", null: false
    t.integer "fb_agency_id", limit: 3, default: 0, null: false, unsigned: true
    t.integer "service_id", limit: 1, default: 0, null: false, unsigned: true
    t.string "secondary_service_ids", default: "", null: false
    t.time "start_time"
    t.time "end_time"
    t.string "schedule_mgmt_notes", comment: "Place to keep notes about potential changees to the agency schedule"
    t.integer "last_schedule_mgmt_datekey", null: false, comment: "Last date these scheduled were managed. Use to randomly audit, etc..."
    t.integer "last_schedule_mgmt_by", default: 0, null: false, comment: "Last User that managed the schedule information", unsigned: true
    t.string "schedule_desc", comment: "Basic description of the schedule for this event"
    t.integer "status_publish_event", limit: 1, null: false, comment: "Master control for publishing - controls whether or not this event is published, default 0 for everyone. Turn them on 1 by 1."
    t.integer "status_publish_event_dates", limit: 1, null: false, comment: "Master control for whether or not event_dates connected to this event are published or not.", unsigned: true
    t.integer "event_accept_walkin", limit: 1, default: 0, null: false, comment: "Default setting for event_service_profiles if they accept walkins or not.", unsigned: true
    t.integer "event_accept_resesrvations", limit: 1, default: 0, null: false, comment: "Default setting for event_service_profiles if they accept reservations or not.", unsigned: true
    t.integer "event_accept_interest", limit: 1, default: 0, null: false, comment: "Default setting for event_service_profiles if they accept interest in their dist or not.", unsigned: true
    t.integer "display_order", limit: 1, default: 0, null: false, unsigned: true
    t.column "display_on_home", "enum('yes','no')", default: "no", null: false
    t.column "alt_id", "enum('Yes','No')", default: "No", null: false
    t.column "quick_serve", "enum('no','yes')", default: "no", null: false, comment: "Feature used to scan alt ids, or other barcodes, and create a service event with no extra steps."
    t.column "mobile_serve", "enum('no','yes')", default: "no", null: false, comment: "this event is eligible for use with the mobile checkin screens developed in March 2020 by Phil Trimble"
    t.column "check_allow_bypass", "enum('yes','no')", default: "yes", null: false, comment: "Lets a site configure whether or not to give the user the option to bypass the data checking and quick serve the family anyway. Used for when the data checking station is overwhelmed."
    t.column "check_dob_validity", "enum('no','yes')", default: "no", null: false, comment: "checks to see if the birthday is in the future, equal to zero, over 110 years old, and other errors"
    t.column "check_address_verified", "enum('no','yes')", default: "no", null: false, comment: "looks at the fam loc record and sees if the address is verified, and if so was it in the last year"
    t.column "check_served_last_year", "enum('no','yes')", default: "no", null: false, comment: "checks to see if the family has gotten a service event from the location in the last year."
    t.column "check_birthmonth", "enum('no','yes')", default: "no", null: false
    t.string "check_instructions", default: "Update of Family Data is Required", null: false, comment: "So an agency can customize the instructions for what they want their users to do if quick serve fails"
    t.integer "use_adoption_tools", limit: 1, default: 0, null: false, unsigned: true
    t.integer "use_survey_tools", limit: 1, default: 0, null: false, comment: "turn on the Q&A system for this event, will still require at least one survey_group_id entry  in the table  qa_event_surveys", unsigned: true
    t.integer "regulated_product", limit: 1, default: 0, null: false, comment: "Does the event distribute regulated product? 0 = no, 1 = yes", unsigned: true
    t.integer "inclusion_id", limit: 1, default: 1, null: false, unsigned: true
    t.string "inclusions", default: "", null: false
    t.string "exclusions", default: "", null: false
    t.string "form_master_num", limit: 60, default: "", null: false
    t.string "add_new_family_script", default: "", null: false, comment: "The script the event uses to add a new family. If this field is not filled out use family_res_add1.php (or successor) otherwise, use the idenfitied script."
    t.integer "limits_future_day", limit: 2, default: 0, null: false, unsigned: true
    t.integer "limits_same_day", limit: 2, default: 0, null: false, unsigned: true
    t.integer "scheduling_interval", limit: 2, comment: "allow an overide of the scheduling interval that comes from the location level", unsigned: true
    t.string "future7", limit: 20, default: "", null: false
    t.integer "d_date_key", default: 0, null: false, comment: "the last time the warehouse RE data was calculated", unsigned: true
    t.integer "d_last_year", default: 0, null: false, comment: "the number of services in the last year relative to the date key", unsigned: true
    t.integer "d_last_90_days", default: 0, null: false, comment: "the number of services in the last 90 days relative to the date key", unsigned: true
    t.integer "d_this_month", default: 0, null: false, comment: "the number of services in the month of the date key", unsigned: true
    t.text "d_trend_month", null: false, comment: "the monthly trend for this month, and the preceeding 12"
    t.text "d_trend_week", null: false, comment: "the number of services each week for this week plush the preceeding 52."
    t.integer "sc_date_key", default: 0, null: false, comment: "the last time the warehoused service category data was calculated", unsigned: true
    t.text "sc_monthly_10", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_15", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_20", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_25", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_30", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_35", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_40", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.integer "service_territory_status_id", limit: 1, default: 0, null: false, comment: "Status for whether or not the event inherits its service_territory from the loc (0) or is custom to the event (1)", unsigned: true
    t.integer "st_id", default: 0, null: false, comment: "The specific service_territories entry that this event follows", unsigned: true
    t.integer "event_address_status_id", limit: 1, default: 0, null: false, comment: "Status for whether or not the event inherits its address from the loc (0) or is custom to the event (1)", unsigned: true
    t.string "address1", limit: 150, default: "", null: false
    t.string "address2", limit: 150, default: "", null: false
    t.string "city", limit: 60, default: "", null: false
    t.string "state", limit: 60, default: "", null: false
    t.string "zip", limit: 5, default: "", null: false
    t.string "zip_plus4", limit: 10, default: "", null: false
    t.string "zip3", limit: 5, default: "", null: false
    t.string "county", limit: 60
    t.string "fips", limit: 5, default: "", null: false, collation: "utf8_unicode_ci"
    t.decimal "latitude", precision: 10, scale: 8, null: false
    t.decimal "longitude", precision: 11, scale: 8, null: false
    t.decimal "tamu_latitude", precision: 10, scale: 8, null: false
    t.decimal "tamu_longitude", precision: 11, scale: 8, null: false
    t.decimal "pt_latitude", precision: 10, scale: 8, null: false
    t.decimal "pt_longitude", precision: 11, scale: 8, null: false
    t.string "school_dis_num", limit: 20, default: "", null: false
    t.integer "address_status_id", limit: 1, default: 0, null: false, unsigned: true
    t.integer "last_geocode_date_key", default: 0, null: false, comment: "uses yyyymmdd format that can link to dim_dates", unsigned: true
    t.string "tamu_geo_match_type", limit: 50
    t.integer "tamu_geo_match_type_id", limit: 1, default: 0, null: false, unsigned: true
    t.string "smarty_geo_match_type", limit: 50
    t.integer "smarty_geo_match_type_id", limit: 1, default: 0, null: false, unsigned: true
    t.string "pt_geo_match_type", limit: 50
    t.integer "pt_geo_match_type_id", limit: 1, default: 0, null: false, unsigned: true
    t.decimal "smarty_tamu_difference", precision: 6, scale: 2
    t.integer "census_block", default: 0, null: false, unsigned: true
    t.integer "census_block_group", default: 0, null: false, unsigned: true
    t.string "census_tract", limit: 10, default: "", null: false
    t.string "zcta", limit: 50
    t.integer "congress_dist_num", limit: 1, unsigned: true
    t.string "time_zone", limit: 100, default: "", null: false
    t.decimal "utc_offset", precision: 4, scale: 2, null: false
    t.string "dst", limit: 5, default: "", null: false
    t.string "geofips_block", limit: 15
    t.string "geofips_bg", limit: 12
    t.string "geofips_tract", limit: 11
    t.string "geofips_cd", limit: 4
    t.string "geofips_state", limit: 2
    t.integer "source_id", limit: 3, default: 0, null: false, unsigned: true
    t.text "notes"
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", default: 0, null: false, unsigned: true
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "last_update_by", unsigned: true
    t.integer "status_id", limit: 1, default: 0, null: false, unsigned: true
    t.index ["event_accept_walkin"], name: "displayorder"
    t.index ["loc_id"], name: "loc_id"
  end

  create_table "foodbank_counties", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "fb_id", limit: 3, unsigned: true
    t.integer "fips", comment: "County Code", unsigned: true
    t.string "fips_five_digit", limit: 5, default: "", collation: "utf8mb4_unicode_ci"
    t.string "county_number", limit: 3, default: "", collation: "utf8mb4_unicode_ci"
    t.string "state_number", limit: 2, default: "", collation: "utf8mb4_bin", comment: "state number"
    t.string "county_name", collation: "utf8mb4_unicode_ci"
    t.string "state", collation: "utf8mb4_unicode_ci"
    t.string "fb_name", collation: "utf8mb4_unicode_ci"
    t.integer "is_shared_county", default: 0, unsigned: true
    t.string "is_primary_fb", limit: 2, default: "", collation: "utf8mb4_bin", comment: "Identified if it is the primary foodbank for the county or not"
    t.string "fa_raw_split_share", limit: 25, default: "", null: false
    t.integer "record_num", default: 0, null: false, unsigned: true
    t.string "notes", default: "", collation: "utf8mb4_unicode_ci"
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", default: 0, unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", unsigned: true
    t.integer "status_id", limit: 1, default: 1, unsigned: true
  end

  create_table "foodbanks_mini", primary_key: "fb_id", id: :integer, limit: 3, unsigned: true, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "fb_name", limit: 80, null: false, collation: "utf8_general_ci"
    t.string "fb_nickname", limit: 40, null: false, collation: "utf8_general_ci"
    t.string "address1", limit: 80
    t.string "address2", limit: 80
    t.string "city", limit: 60
    t.string "state", limit: 10
    t.string "zip", limit: 15
    t.string "phone_public_help", limit: 30, null: false, comment: "Public phone number customers can call to get help."
    t.integer "fb_type_id", limit: 1, null: false, unsigned: true
    t.string "fb_logo", null: false
    t.string "fb_url", null: false, comment: "Foodbank general url for their website."
    t.string "fb_agency_locator_url", null: false, comment: "Public link for how to find food and agencies with food for this foodbank."
    t.string "fb_volunteer_url", null: false, comment: "Public link for how to volunteer with this foodbank"
    t.string "fb_donate_url", null: false, comment: "Public link for how to donate money to this foodbank"
    t.string "fb_food_donate_url", null: false, comment: "Public link for how to donate food to this foodbank"
    t.string "fb_fano_url"
    t.integer "display_order", limit: 1, null: false, unsigned: true
    t.integer "live_on_pt", limit: 1, default: 2, null: false, unsigned: true
    t.date "live_date"
    t.string "billing_contact", limit: 100
    t.string "billing_contact_email", limit: 100
    t.string "billing_contact_phone", limit: 30
    t.integer "invoicing_status", limit: 1, null: false, unsigned: true
    t.decimal "per_agency_rate", precision: 6, scale: 2, null: false
    t.integer "billing_cycle_type_id", limit: 1, default: 12, null: false, comment: "12 = month 4=qty 1=yearly", unsigned: true
    t.integer "agency_contract_visibility_status", limit: 1, null: false, comment: "should we display agency contracts to this fb's agencies", unsigned: true
    t.integer "fb_contract_signing_status", limit: 1, null: false, comment: "has this fb signed the MSSA 0=NO 1=Yes", unsigned: true
    t.string "macola_cus_no", null: false, comment: "macola customer number, agency number"
    t.integer "number_of_pantries", null: false, unsigned: true
    t.integer "number_of_other_grocery_agencies", null: false, unsigned: true
    t.integer "nar_fy15_num_emergency_pantries", null: false, unsigned: true
    t.integer "nar_fy15_num_produce_markets", null: false, unsigned: true
    t.integer "nar_fy15_num_soup_kitchens", null: false, unsigned: true
    t.integer "nar_fy15_num_emergency_shelters", null: false, unsigned: true
    t.integer "nar_fy15_num_residential", null: false, unsigned: true
    t.integer "nar_fy15_num_day_care", null: false, unsigned: true
    t.integer "nar_fy15_num_seniors", null: false, unsigned: true
    t.integer "nar_fy15_num_rehabilitation", null: false, unsigned: true
    t.integer "nar_fy15_num_youth_programs", null: false, unsigned: true
    t.integer "nar_fy15_num_multi-serv", null: false, unsigned: true
    t.integer "nar_fy15_num_csfp", null: false, unsigned: true
    t.integer "nar_fy15_num_other", null: false, unsigned: true
    t.integer "nar_fy15_total_served", null: false, unsigned: true
    t.integer "nar_fy14_total_served", null: false, unsigned: true
    t.text "nar_fy15_other_desc", null: false
    t.integer "nar_fy15_ap_staf", null: false, unsigned: true
    t.column "cd_sys_apricot", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_charity_tracker", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_client_track", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_eto", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_food_bank_manager", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_food_star", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_link2feed", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_microsoft_access_excel", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_oasis", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_pantry_trak", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_salesforce", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_virtual_case_manager", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_other", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.column "cd_sys_desc_other", "enum('Yes','No','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.integer "fb_size", null: false, comment: "Ranking of the foodbank based on number of PantryTrak possible agencies", unsigned: true
    t.string "fb_size_category"
    t.text "fb_contact_info", null: false
    t.text "fb_help_info", null: false
    t.integer "primary_contact_id", null: false, comment: "links to the contacts table and identifies the primary contact for the foodbank", unsigned: true
    t.integer "admin_loc_id", null: false, comment: "The loc id the foodbank uses to administer its foodbanks account. Foodbank users log into this account and using the tools menus access agency accounts e.g. for MOF this is loc 260.", unsigned: true
    t.integer "contact_group_id", null: false, comment: "If there is more than one primary contact, links to the contact groups table and identifies the primary contact group for the foodbank. E.g. a list of four staffers.", unsigned: true
    t.string "service_states", limit: 50
    t.string "service_area_desc"
    t.column "fb_type", "enum('Feeding America','Non Feeding America','Multi Agency Network','Unknown')", default: "Unknown", null: false, comment: "what kind of foodbank is this"
    t.string "epg_2_group", null: false, comment: "The Feeding America Environmental Peer Group the Foodbank has been assigned to"
    t.string "website"
    t.string "form_master_num_default", limit: 50, default: "pt_001", null: false, collation: "utf8_general_ci"
    t.integer "age_grouping_id", limit: 2, default: 6, comment: "6 = 0-17- 18-59 60+, 31 = 0-17 18-64 65+", unsigned: true
    t.integer "senior_age_start", default: 60, null: false, comment: "what age does this locations state consider for senior, 60 or 65", unsigned: true
    t.integer "default_age_groupings_id", default: 1, null: false, unsigned: true
    t.integer "implementation_status", limit: 1, null: false, comment: "current status in the implementation process", unsigned: true
    t.text "implementation_narrative", null: false
    t.text "implementation_anectdote", null: false
    t.integer "outreach_status", limit: 1, null: false, comment: "current status in the outreach process", unsigned: true
    t.integer "sale_status", limit: 1, null: false, comment: "This column is used to track the foodbanks sales status. Here are the options: 1 - Prospect,  2 - Outreach,  3 - Qualify,  4 - Data Gathering,  5 - Initial Demo,  6 - Final Decision,  7 - Contract,  8 - Support (Won),  9 - Close (Lost),  10 - Implementation ,  11 - Secondary Sale, ", unsigned: true
    t.text "opportunity_description", null: false, comment: "used to describe the current thoughts on the opportunity for bringing the foodbank onto PantryTrak"
    t.integer "current_probability", limit: 1, null: false, comment: "This column is used to descript our potential to bring the foodbank into the system. 1 - Almost Certain,  2 - Likely,  3 - Possible,  4 - Unlikely ,  5 - Very Unlikely", unsigned: true
    t.integer "value", null: false, comment: "rought estimate dollar amount of the value of implementing with the foodbank.", unsigned: true
    t.integer "value_fy18", null: false, unsigned: true
    t.integer "value_fy18_onetime", null: false
    t.integer "value_fy19", null: false, unsigned: true
    t.integer "value_fy19_onetime", null: false
    t.text "decision_making_timeline", null: false, comment: "When would we expect them to make a decision."
    t.text "next_steps", null: false, comment: "what actions need to be taken with the foodbank"
    t.integer "viability_status", limit: 1, null: false, comment: "how viable is a client data implementation at this foodbank", unsigned: true
    t.text "viability_desc", null: false
    t.string "fa_epg", null: false, comment: "Feeding America Environmental Peer Group peach apple, turnip, rutabega, sunchoke etc..."
    t.string "fa_region", null: false
    t.integer "fa_member_status", limit: 1, null: false, comment: "1 member of feeding america, 0 not a member", unsigned: true
    t.string "usda_region", null: false
    t.string "state_association", null: false
    t.integer "relationship_mgr", null: false, comment: "The user id of the individual that is responsible for managing the relationship with this foodbank.", unsigned: true
    t.integer "address_status_id", limit: 1, null: false, unsigned: true
    t.integer "last_geocode_date_key", null: false, unsigned: true
    t.string "tamu_geo_match_type", limit: 50
    t.integer "tamu_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.string "smarty_geo_match_type", limit: 50
    t.integer "smarty_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.string "pt_geo_match_type", limit: 50
    t.integer "pt_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.decimal "latitude", precision: 10, scale: 8, null: false
    t.decimal "longitude", precision: 11, scale: 8, null: false
    t.decimal "tamu_latitude", precision: 10, scale: 8, null: false
    t.decimal "tamu_longitude", precision: 11, scale: 8, null: false
    t.decimal "pt_latitude", precision: 10, scale: 8, null: false
    t.decimal "pt_longitude", precision: 11, scale: 8, null: false
    t.integer "census_block", null: false, unsigned: true
    t.integer "census_block_group", null: false, unsigned: true
    t.string "census_tract", limit: 10, null: false
    t.string "zcta", limit: 50
    t.integer "congress_dist_num", limit: 1, unsigned: true
    t.string "time_zone", limit: 100, null: false
    t.decimal "utc_offset", precision: 4, scale: 2, null: false
    t.string "dst", limit: 5, null: false
    t.string "geofips_block", limit: 15
    t.string "geofips_bg", limit: 12
    t.string "geofips_tract", limit: 11
    t.string "geofips_cd", limit: 2
    t.string "geofips_state", limit: 2
    t.integer "geocluster_id", null: false, unsigned: true
    t.string "future7", limit: 20, null: false, collation: "utf8_general_ci"
    t.integer "source_id", limit: 3, null: false, unsigned: true
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", null: false, unsigned: true
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", limit: 1, null: false, unsigned: true
  end

  create_table "geography_profile_types", primary_key: "geo_profile_type_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "geo_profile_type_name", limit: 25, default: "", null: false, comment: "The type of geography this respresents, e.g. specific zip codes, all zip codes in CNTY, etc... "
    t.text "geo_profile_notes", collation: "utf8_general_ci"
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", null: false, comment: "user_id of the person that created this record", unsigned: true
    t.datetime "last_update", null: false
    t.integer "last_update_by", null: false, comment: "user_id of the last person to update this record", unsigned: true
    t.integer "status_id", limit: 1, default: 1, null: false, comment: "status of the record, uses codes from table status_codes", unsigned: true
  end

  create_table "locations", primary_key: "loc_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "agencies as defined by their supporting food bank, typically a single physical site that operates one of more events (programs)", force: :cascade do |t|
    t.string "loc_num", limit: 20, null: false, collation: "utf8_general_ci"
    t.integer "org_id", default: 0, null: false, unsigned: true
    t.integer "parent_id", limit: 2, default: 0, null: false, unsigned: true
    t.string "loc_name", limit: 150, default: "", null: false, collation: "utf8_general_ci"
    t.string "loc_nickname", limit: 100, null: false, collation: "utf8_general_ci"
    t.string "address1", limit: 150, default: "", null: false, collation: "utf8_general_ci"
    t.string "address2", limit: 150, default: "", null: false, collation: "utf8_general_ci"
    t.string "city", limit: 60, default: "", null: false, collation: "utf8_general_ci"
    t.string "state", limit: 60, default: "", null: false, collation: "utf8_general_ci"
    t.string "zip", limit: 5, default: "", null: false, collation: "utf8_general_ci"
    t.string "zip_plus4", limit: 10, null: false, collation: "utf8_general_ci"
    t.string "zip3", limit: 5
    t.string "fips", limit: 5, null: false
    t.string "county", limit: 60, default: "", null: false, collation: "utf8_general_ci"
    t.string "phone", limit: 60, default: "", null: false, collation: "utf8_general_ci"
    t.string "fax", limit: 60, default: "", null: false, collation: "utf8_general_ci"
    t.integer "msa", limit: 3, null: false, unsigned: true
    t.integer "cbsa", limit: 3, null: false, unsigned: true
    t.decimal "latitude", precision: 10, scale: 8, null: false
    t.decimal "longitude", precision: 11, scale: 8, null: false
    t.decimal "tamu_latitude", precision: 10, scale: 8, null: false
    t.decimal "tamu_longitude", precision: 11, scale: 8, null: false
    t.decimal "pt_latitude", precision: 10, scale: 8, default: "99.99999999", null: false
    t.decimal "pt_longitude", precision: 11, scale: 8, default: "999.99999999", null: false
    t.text "service_types"
    t.string "school_dis_num", limit: 20, null: false
    t.integer "address_status_id", limit: 1, null: false, unsigned: true
    t.integer "last_geocode_date_key", null: false, unsigned: true
    t.string "tamu_geo_match_type", limit: 50
    t.integer "tamu_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.string "smarty_geo_match_type", limit: 50
    t.integer "smarty_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.string "pt_geo_match_type", limit: 50
    t.integer "pt_geo_match_type_id", limit: 1, null: false, unsigned: true
    t.decimal "smarty_tamu_difference", precision: 6, scale: 2
    t.integer "census_block", null: false, unsigned: true
    t.integer "census_block_group", null: false, unsigned: true
    t.string "census_tract", limit: 10, null: false
    t.string "zcta", limit: 50
    t.integer "congress_dist_num", limit: 1, unsigned: true
    t.string "time_zone", limit: 100, null: false
    t.string "time_zone_php", limit: 100, default: "America/New_York", null: false
    t.decimal "utc_offset", precision: 4, scale: 2, null: false
    t.string "dst", limit: 5, null: false
    t.string "geofips_block", limit: 15
    t.string "geofips_bg", limit: 12
    t.string "geofips_tract", limit: 11
    t.string "geofips_cd", limit: 4
    t.string "geofips_state", limit: 2
    t.integer "primary_user_id", default: 0, null: false, unsigned: true
    t.integer "primary_fb_id", limit: 2, null: false, unsigned: true
    t.string "alt_fb_ids", limit: 50, null: false, collation: "utf8_general_ci"
    t.integer "loc_type_id", limit: 2, default: 0, null: false, unsigned: true
    t.column "e_signature", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.integer "user_maintenance_id", limit: 1, default: 0, null: false, comment: "can this agency view users, edit users, add users - default of 0 is ", unsigned: true
    t.column "agency_data", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.column "pt_id_card1", "enum('No','Yes')", default: "No", null: false, comment: "used to turn the id card feature on or off for a location. The default value should be yes after april 2016"
    t.column "pt_id_card2", "enum('No','Yes')", default: "No", null: false, comment: "used to turn the id card(mini) feature on or off for a location. The default value should be yes after april 2016"
    t.column "pounds_served", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.column "pieces_served", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.integer "primary_event_id", default: 0, null: false, unsigned: true
    t.string "zip3_zones1", default: "", null: false, collation: "utf8_general_ci"
    t.string "zip3_zones2", null: false, collation: "utf8_general_ci"
    t.string "search_states", limit: 40
    t.integer "scheduling_interval", limit: 2, default: 60, null: false, unsigned: true
    t.column "agency_data_all", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.column "service_limits", "enum('Yes','No')", default: "No", null: false, collation: "utf8_general_ci"
    t.integer "age_grouping_id", limit: 2, default: 6, comment: "6 = 0-17- 18-59 60+, 31 = 0-17 18-64 65+", unsigned: true
    t.integer "senior_age_start", default: 60, null: false, comment: "what age does this locations state consider for senior, 60 or 65", unsigned: true
    t.integer "default_age_groupings_id", default: 1, null: false, unsigned: true
    t.integer "future3", null: false, unsigned: true
    t.integer "future4", null: false, unsigned: true
    t.string "future5", limit: 30, null: false, collation: "utf8_general_ci"
    t.string "future6", limit: 30, null: false, collation: "utf8_general_ci"
    t.integer "fb_rank", null: false, unsigned: true
    t.integer "fb_rank_county", null: false, unsigned: true
    t.string "fb_tier", limit: 50, null: false
    t.string "fb_tier_county", limit: 50, null: false
    t.integer "billing_status_id", limit: 1, null: false, comment: "used to tract if the location is included in the billing agencies process. this is a mechanism to permanently remove someone from the pool of paying agencies. the billing_agencies data element is then used month to month.", unsigned: true
    t.integer "billing_multiplier", limit: 1, default: 1, null: false, comment: "a mechamism to gross up or down the amount an agency is billed for. i.e. 4 sites that are one location the loc gets a billing multiplier of 4.", unsigned: true
    t.text "billing_note_external", null: false, comment: "rolling note field used to communicate with the foodbank why the agency has a certain billing multiplier"
    t.integer "contract_user_id", null: false, comment: "this is the user that is primarily responsible for signing the contract for the site. or responsible for managing the process to get the contract signed.", unsigned: true
    t.integer "privacy_bypass_status_id", limit: 1, null: false, comment: "used to exempt some agencys users from seeing the Privacy Policy, 20171023 MHM added for Salvation Army Columbus where their users are not permitted by their rules to acknowledge or sign anything", unsigned: true
    t.string "logo", limit: 70, null: false, collation: "utf8_general_ci"
    t.integer "d_date_key", null: false, comment: "the last time the warehouse RE data was calculated", unsigned: true
    t.integer "d_last_year", null: false, comment: "the number of services in the last year relative to the date key", unsigned: true
    t.integer "d_last_90_days", null: false, comment: "the number of services in the last 90 days relative to the date key", unsigned: true
    t.integer "d_this_month", null: false, comment: "the number of services in the month of the date key", unsigned: true
    t.text "d_trend_month", null: false, comment: "the monthly trend for this month, and the preceeding 12"
    t.text "d_trend_week", null: false, comment: "the number of services each week for this week plush the preceeding 52."
    t.integer "sc_date_key", null: false, comment: "the last time the warehouse loc data was calculated", unsigned: true
    t.text "sc_monthly_10", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_15", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_20", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_25", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_30", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_35", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category"
    t.text "sc_monthly_40", null: false, comment: "the monthly trend for this month, and the preceeding 12 for the service category "
    t.datetime "date_added", null: false
    t.string "added_by", limit: 150, default: "", null: false, collation: "utf8_general_ci"
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "last_update_by", null: false, unsigned: true
    t.integer "status_id", limit: 1, default: 0, null: false, unsigned: true
    t.index ["fips"], name: "fips"
    t.index ["geofips_bg"], name: "block_group"
    t.index ["geofips_tract"], name: "tract"
    t.index ["primary_fb_id"], name: "foodbank"
    t.index ["state"], name: "state"
  end

  create_table "service_categories", primary_key: "service_category", id: :integer, unsigned: true, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "categories of services that summary the service types.", force: :cascade do |t|
    t.string "service_category_name", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.string "service_category_desc", null: false
    t.string "color", limit: 20, default: "#FF0080", null: false
    t.string "sc_mapping", null: false, comment: "Field used to tell where each service category data should be warehoused. Used in the events table and others."
    t.string "notes", default: "", null: false, collation: "utf8_general_ci"
    t.datetime "date_added", null: false
    t.string "added_by", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "status_id", limit: 1, default: 2, null: false, unsigned: true
  end

  create_table "service_types", primary_key: "service_id", id: :integer, limit: 2, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "types of service and categories of service that a family might receive", force: :cascade do |t|
    t.string "service_desc", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.string "service_desc_long", null: false
    t.integer "meals_served", limit: 1, null: false, unsigned: true
    t.integer "form_type_id", limit: 1, default: 1, null: false, unsigned: true
    t.integer "grouping", limit: 2, default: 0, null: false, unsigned: true
    t.string "group_name", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.integer "sub_grouping", limit: 2, default: 0, null: false, unsigned: true
    t.integer "service_category1", limit: 1, null: false, unsigned: true
    t.integer "service_sub_category1", limit: 1, null: false, unsigned: true
    t.integer "regulated_service", limit: 1, null: false, comment: "does this service typically require a USDA or State signature, this will be used to help audit signature requirements by location and event"
    t.integer "organization_id", limit: 3, default: 0, null: false, unsigned: true
    t.string "logo", limit: 60, null: false, collation: "utf8_general_ci"
    t.string "notes", default: "", null: false, collation: "utf8_general_ci"
    t.datetime "date_added", null: false
    t.string "added_by", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "status_id", limit: 1, default: 2, null: false, unsigned: true
    t.index ["grouping", "sub_grouping"], name: "group_sg"
    t.index ["grouping"], name: "group"
    t.index ["service_category1"], name: "service_cat"
    t.index ["sub_grouping"], name: "sg"
  end

  create_table "types_service_geography", primary_key: "geo_type_id", id: :integer, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "geo_type_name", limit: 25, default: "", null: false, comment: "The type of geography this respresents, e.g. zip codes, CNTY, etc... "
    t.text "geo_type_notes", collation: "utf8_general_ci"
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", null: false, comment: "user_id of the person that created this record", unsigned: true
    t.datetime "last_update"
    t.integer "last_update_by", null: false, comment: "user_id of the last person to update this record", unsigned: true
    t.integer "status_id", limit: 1, default: 1, null: false, comment: "status of the record, uses codes from table status_codes", unsigned: true
  end

  create_table "zip_codes", primary_key: "zip_id", id: :integer, limit: 3, unsigned: true, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", comment: "every unique zip code in the us and the multi-county zips, processed with ranking by address counts", force: :cascade do |t|
    t.string "zip_code", limit: 5, default: "", null: false, collation: "utf8_general_ci"
    t.string "city", limit: 50, default: "", null: false
    t.string "state", limit: 2, default: "", null: false
    t.string "county", limit: 50, default: "", null: false, collation: "utf8_general_ci"
    t.integer "county_id", limit: 2, default: 0, null: false, unsigned: true
    t.integer "fips", limit: 3, default: 0, null: false, unsigned: true
    t.float "address_percent", default: 0.0, null: false
    t.integer "priority", limit: 1, default: 0, null: false, unsigned: true
    t.decimal "latitude", precision: 10, scale: 8, null: false
    t.decimal "longitude", precision: 11, scale: 8, null: false
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", default: 0, null: false, unsigned: true
    t.datetime "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "status_id", limit: 1, default: 1, null: false, unsigned: true
    t.integer "last_update_by", unsigned: true
    t.index ["zip_code"], name: "zips"
  end

end
