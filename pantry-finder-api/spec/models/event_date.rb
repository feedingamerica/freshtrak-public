# frozen_string_literal: true

describe EventDate, type: :model do
  let(:event_date) { create(:event_date) }

  it 'belongs to an event' do
    expect(event_date.event).to be_an_instance_of(Event)
  end
end
