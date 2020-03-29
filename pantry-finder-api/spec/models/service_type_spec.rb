# frozen_string_literal: true

describe ServiceType, type: :model do
  let(:service_type) { create(:service_type) }

  it 'has many events' do
    events = 5.times.map { create(:event, service_type: service_type) }

    expect(service_type.events.pluck(:id)).to eq(events.pluck(:id))
  end

  it 'belongs to a service category' do
    expect(service_type.service_category).to be_an_instance_of(ServiceCategory)
  end
end
