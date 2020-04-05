# frozen_string_literal: true

describe ServiceType, type: :model do
  it 'connects to the service_types table' do
    expect(described_class.count).not_to be_nil
  end
end
