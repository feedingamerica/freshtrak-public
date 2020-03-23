# frozen_string_literal: true

describe ZipCode, type: :model do
  it 'should connect to the zip_codes table' do
    expect(ZipCode.count).to be > 0
  end

  it 'should retrieve a zip_code' do
    expect(ZipCode.last).to be_an_instance_of(ZipCode)
  end
end
