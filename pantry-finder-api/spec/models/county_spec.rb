# frozen_string_literal: true

describe County, type: :model do
  let(:county) { create(:county) }

  it 'has many zip_codes' do
    zips = 5.times.map { create(:zip_code, fips: county.id) }

    expect(county.zip_codes.pluck(:id)).to eq(zips.pluck(:id))
  end

  it 'has many agencies' do
    agencies = 5.times.map { create(:agency, fips: county.id) }

    expect(county.agencies.pluck(:id)).to eq(agencies.pluck(:id))
  end

  it 'has many foodbanks' do
    foodbanks = 5.times.map { create(:foodbank, county_ids: county.id) }

    expect(county.foodbanks.pluck(:id)).to eq(foodbanks.pluck(:id))
  end
end
