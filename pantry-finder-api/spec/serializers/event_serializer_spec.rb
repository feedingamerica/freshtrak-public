# frozen_string_literal: true

describe EventSerializer do
  it 'JSON Event Display fields' do
    described_class.new(
      Event.new(event_name: 'big event', address1: 'addr 1',
                city: 'the town', state: 'OH', zip: '12345',
                pt_latitude: '40.1479133',
                pt_longitude: '-83.0959877', loc_id: '6')
    )
  end
end
