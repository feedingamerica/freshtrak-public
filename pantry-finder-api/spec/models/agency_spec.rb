# frozen_string_literal: true

describe Agency, type: :model do
  let(:agency) { create(:agency) }

  it 'has a foodbank' do
    expect(agency.foodbank).to be_an_instance_of(Foodbank)
  end

  it 'has a county' do
    expect(agency.county).to be_an_instance_of(County)
  end

  context 'with scopes' do
    before do
      @active_agency = create(:agency, status_id: 1)
      create(:agency, status_id: 0)
    end

    it 'has an active default scope' do
      expect(Agency.pluck(:id)).to eq([@active_agency.id])
    end

    it 'can find agencies through a foodbank' do
      zip = create(:zip_code)
      fb = create(:foodbank, county_ids: zip.county.id)
      agencies = 5.times.map do
        create(:agency, foodbank: fb)
      end

      agency_results = Agency.by_foodbank(zip.zip_code)

      expect(agency_results.pluck(:id)).to eq(agencies.pluck(:id))
    end

    it 'can find agencies through a county' do
      zip = create(:zip_code)
      agencies = 5.times.map do
        create(:agency, fips: zip.county.fips)
      end

      agency_results = Agency.by_county(zip.zip_code)

      expect(agency_results.pluck(:id)).to eq(agencies.pluck(:id))
    end
  end
end
