# frozen_string_literal: true

describe EventHour, type: :model do
  let(:event_hour) { create(:event_hour) }

  it 'belongs to an event date' do
    expect(event_hour.event_date).to be_an_instance_of(EventDate)
  end

  it 'has many event slots' do
    event_slots =
      5.times.map { create(:event_slot, event_hour: event_hour) }

    expect(event_hour.event_slots.pluck(:id)).to eq(event_slots.pluck(:id))
  end

  it 'calculates open slots' do
    event_hour = create(:event_hour, capacity: 9, reserved: 5)

    expect(event_hour.open_slots).to eq(4)
  end

  context 'with scopes' do
    it 'defaults to active event hours' do
      create(:event_hour, status_id: 0)

      expected_id = event_hour.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end
  end
end
