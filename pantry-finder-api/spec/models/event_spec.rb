# frozen_string_literal: true

describe Event, type: :model do
  it 'connects to the events table' do
    expect(described_class.count).not_to be_nil
  end
end
