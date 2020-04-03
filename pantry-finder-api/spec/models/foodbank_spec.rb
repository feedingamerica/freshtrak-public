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

  context 'with scopes' do
    before do
      @active_foodbank = create(:foodbank, status_id: 1)
      create(:foodbank, status_id: 0)
    end

    it 'has an active default scope' do
      expect(Foodbank.pluck(:id)).to eq([@active_foodbank.id])
    end

    it 'can find foodbanks through a zip' do
      zip = create(:zip_code)

      foodbanks = 5.times.map do
        create(:foodbank, county_ids: zip.county.id)
      end

      foodbank_results = Foodbank.by_county(zip.zip_code)

      expect(foodbank_results.pluck(:fb_id)).to eq(foodbanks.pluck(:fb_id))
    end
  end
end
