# frozen_string_literal: true

describe Foodbank, type: :model do
  let(:foodbank) { create(:foodbank) }

  it 'has many counties' do
    counties = 5.times.map { create(:county, foodbank_ids: foodbank.id) }

    expect(foodbank.counties.pluck(:fips)).to eq(counties.pluck(:fips))
  end

  it 'has many agencies' do
    agencies = 5.times.map { create(:agency, foodbank: foodbank) }

    expect(foodbank.agencies.pluck(:id)).to eq(agencies.pluck(:id))
  end
end
