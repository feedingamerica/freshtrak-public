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
    t.string "schedule_desc", comment: "basic description of the schedule for this event"
    t.integer "display_order", limit: 1, default: 0, null: false, unsigned: true
    t.column "display_on_home", "enum('yes','no')", default: "no", null: false
    t.column "alt_id", "enum('Yes','No')", default: "No", null: false
    t.column "quick_serve", "enum('no','yes')", default: "no", null: false, comment: "Feature used to scan alt ids, or other barcodes, and create a service event with no extra steps."
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
    t.integer "event_address_status_id", limit: 1, default: 0, null: false, unsigned: true
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
    t.datetime "date_added", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "added_by", default: 0, null: false, unsigned: true
    t.timestamp "last_update", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "last_update_by", unsigned: true
    t.integer "status_id", limit: 1, default: 0, null: false, unsigned: true
    t.index ["display_order"], name: "displayorder"
    t.index ["loc_id"], name: "loc_id"
  end

  create_table "foodbank_counties", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.integer "fb_id", limit: 3, unsigned: true
    t.integer "fips", unsigned: true
    t.string "fips_five_digit", limit: 5, default: "", collation: "utf8mb4_unicode_ci"
    t.string "county_number", limit: 3, default: "", collation: "utf8mb4_unicode_ci"
    t.string "state_number", limit: 2, default: "", collation: "utf8mb4_bin"
    t.string "county_name", collation: "utf8mb4_unicode_ci"
    t.string "state", collation: "utf8mb4_unicode_ci"
    t.string "fb_name", collation: "utf8mb4_unicode_ci"
    t.integer "is_shared_county", default: 0, unsigned: true
    t.integer "is_primary_fb", default: 1, unsigned: true
    t.string "notes", default: "", collation: "utf8mb4_unicode_ci"
    t.datetime "date_added"
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
    t.integer "fb_type_id", limit: 1, null: false, unsigned: true
    t.string "fb_logo", null: false
    t.string "fb_url"
    t.string "fb_agency_locator_url"
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
