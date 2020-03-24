# frozen_string_literal: true

describe County, type: :model do
  it 'should connect to the counties table' do
    expect(County.count).to be > 0
  end

  it 'should retrieve a county' do
    expect(County.last).to be_an_instance_of(County)
  end

  it 'has many zip_codes' do
    counties =
      County.joins(:zip_codes)
            .where.not(zip_codes: { fips: nil })
            .last(10)

    counties.each do |county|
      zips = ZipCode.where(fips: county.fips).order(:id).pluck(:id)
      county_zips = county.zip_codes.order(:id).pluck(:id)
      expect(county_zips).to eq(zips)
    end
  end

  it 'has many foodbanks' do
    counties =
      County.joins(:foodbank_counties)
            .where.not(foodbank_counties: { fips: nil })
            .last(10)

    counties.each do |county|
      foodbank_ids = FoodbankCounty.where(fips: county.fips).pluck(:fb_id).sort
      expect(county.foodbanks.pluck(:fb_id).sort).to eq(foodbank_ids)
    end
  end
end
