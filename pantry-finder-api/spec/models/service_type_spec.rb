# frozen_string_literal: true

describe ServiceType, type: :model do
  it 'should connect to the service_types table' do
    expect(ServiceType.count).not_to be_nil
  end
end
