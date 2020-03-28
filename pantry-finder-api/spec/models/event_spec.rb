# frozen_string_literal: true

describe Event, type: :model do
  it 'should connect to the events table' do
    expect(Event.count).not_to be_nil
  end
end
