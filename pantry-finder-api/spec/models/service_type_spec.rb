# frozen_string_literal: true

describe ServiceType, type: :model do
  it 'should connect to the service_types table' do
    expect(ServiceType.count).to be > 0
  end

  it 'should retrieve a service_type' do
    expect(ServiceType.last).to be_an_instance_of(ServiceType)
  end
end
