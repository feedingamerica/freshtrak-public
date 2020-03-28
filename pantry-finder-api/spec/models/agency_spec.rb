# frozen_string_literal: true

describe Agency, type: :model do
  it 'should connect to the agencies table' do
    expect(Agency.count).to be > 0
  end

  it 'should retrieve an agency' do
    expect(Agency.last).to be_an_instance_of(Agency)
  end

  it 'has an active default scope' do
    expect(Agency.all.count).to eq(Agency.active.count)
  end

  it 'should scope to active agencies' do
    expect(Agency.active.pluck(:status_id).uniq).to eq([1])
  end

  it 'has one foodbank' do
    fb_ids = Foodbank.pluck(:id)
    agencies = Agency.where(primary_fb_id: fb_ids).last(10)

    agencies.each do |agency|
      foodbank = Foodbank.find(agency.primary_fb_id)

      expect(agency.foodbank.id).to eq(foodbank.id)
    end
  end

  it 'has one county' do
    county_ids = County.pluck(:fips)
    agencies = Agency.where(fips: county_ids).last(10)

    agencies.each do |agency|
      county = County.find(agency.fips)

      expect(agency.county.id).to eq(county.id)
    end
  end

  it 'scopes by agencies that serve a zipcode' do
    # TODO: Figure out how to test this whithout replicating source code
  end
end
