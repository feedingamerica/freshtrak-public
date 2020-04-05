# frozen_string_literal: true

describe Agency, type: :model do
  let(:agency) { create(:agency) }

  it 'has a foodbank' do
    expect(agency.foodbank).to be_an_instance_of(Foodbank)
  end

  it 'has a county' do
    expect(agency.county).to be_an_instance_of(County)
  end

  it 'has events' do
    events = 5.times.map { create(:event, agency: agency) }

    expect(agency.events.pluck(:id)).to eq(events.pluck(:id))
  end

  it 'has event dates' do
    event = create(:event, agency: agency)
    event_dates = 5.times.map { create(:event_date, event: event) }

    expect(agency.event_dates.pluck(:id)).to eq(event_dates.pluck(:id))
  end

  context 'with scopes' do
    before do
      # default that should be ignored by scopes
      create(:agency, status_id: 0)
    end

    it 'has an active default scope' do
      active_agency = create(:agency, status_id: 1)
      expect(described_class.pluck(:id)).to eq([active_agency.id])
    end

    it 'can find agencies through a foodbank' do
      zip = create(:zip_code)
      fb = create(:foodbank, county_ids: zip.county.id)
      agencies = 5.times.map do
        create(:agency, foodbank: fb)
      end

      agency_results = described_class.by_foodbank(zip.zip_code)

      expect(agency_results.pluck(:id)).to eq(agencies.pluck(:id))
    end

    it 'can find agencies through a county' do
      zip = create(:zip_code)
      agencies = 5.times.map do
        create(:agency, fips: zip.county.fips)
      end

      agency_results = described_class.by_county(zip.zip_code)

      expect(agency_results.pluck(:id)).to eq(agencies.pluck(:id))
    end

    it 'can find agencies through an event date' do
      date = (Time.zone.today + 2).to_s.delete('-')
      agencies = 5.times.map do
        agency = create(:agency)
        event = create(:event, agency: agency)
        create(:event_date, event: event, date: date)
        agency
      end

      agency_results = described_class.by_event_date(date)
      expect(agency_results.pluck(:id)).to eq(agencies.pluck(:id))
    end
  end
end
