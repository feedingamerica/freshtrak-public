# frozen_string_literal: true

FactoryBot.define do
  factory :service_type do
    service_desc_long { '' }
    meals_served { 0 }
    service_sub_category1 { 0 }
    regulated_service { 0 }
    logo { '' }
    date_added { Time.now.utc }

    service_category
  end
end
