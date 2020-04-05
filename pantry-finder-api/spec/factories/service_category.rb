# frozen_string_literal: true

FactoryBot.define do
  factory :service_category do
    id do
      if ServiceCategory.count == 0
        1
      else
        ServiceCategory.last.id + 1
      end
    end
    service_category_name { 'Choice Pantry' }
    service_category_desc { '' }
    sc_mapping { '' }
    date_added { Time.now.utc }
  end
end
