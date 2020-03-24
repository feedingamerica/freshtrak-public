# frozen_string_literal: true

describe Foodbank, type: :model do
  it 'should connect to the foodbanks table' do
    expect(Foodbank.count).to be > 0
  end

  it 'should retrieve a foodbank' do
    expect(Foodbank.last).to be_an_instance_of(Foodbank)
  end

  it 'has many counties' do
    foodbanks =
      Foodbank.joins(:foodbank_counties)
              .where.not(foodbank_counties: { fb_id: nil })
              .last(10)

    foodbanks.each do |foodbank|
      foodbank_ids = FoodbankCounty.where(fb_id: foodbank.id).pluck(:fips).sort
      expect(foodbank.counties.pluck(:fips).sort).to eq(foodbank_ids)
    end
  end

  it 'has many pantry_locations' do
    foodbanks =
      Foodbank.joins(:pantry_locations)
              .where.not(locations: { primary_fb_id: nil })
              .last(10)

    foodbanks.each do |fb|
      pantry_location_ids =
        PantryLocation.where(primary_fb_id: fb.id).pluck(:id).sort

      expect(fb.pantry_locations.pluck(:id).sort).to eq(pantry_location_ids)
    end
  end
end
