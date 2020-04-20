# frozen_string_literal: true

describe EventSlot, type: :model do
  let(:event_slot) { create(:event_slot) }

  it 'belongs to an event hour' do
    expect(event_slot.event_hour).to be_an_instance_of(EventHour)
  end

  it 'calculates open slots' do
    event_slot = create(:event_slot, capacity: 19, reserved: 12)

    expect(event_slot.open_slots).to eq(7)
  end

  context 'with scopes' do
    it 'defaults to active event slots' do
      create(:event_slot, status_id: 0)

      expected_id = event_slot.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end
  end
end
