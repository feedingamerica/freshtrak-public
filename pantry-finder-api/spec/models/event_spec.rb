# frozen_string_literal: true

describe Event, type: :model do
  let(:event) { create(:event) }

  it 'belongs to an agency' do
    expect(event.agency).to be_an_instance_of(Agency)
  end

  it 'belongs to a service type' do
    expect(event.service_type).to be_an_instance_of(ServiceType)
  end

  it 'has a service category' do
    expect(event.service_category).to be_an_instance_of(ServiceCategory)
  end

  it 'has many event dates' do
    dates = 5.times.map { create(:event_date, event: event) }

    expect(event.event_dates.pluck(:id)).to eq(dates.pluck(:id))
  end

  it 'has a service description' do
    expect(event.service_description).to eq('Choice Pantry')
  end
end
