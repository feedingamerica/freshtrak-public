# frozen_string_literal: true

describe ZipCode, type: :model do
  it 'should connect to the zip_codes table' do
    expect(ZipCode.count).to be > 0
  end

  it 'should retrieve a zip_code' do
    expect(ZipCode.last).to be_an_instance_of(ZipCode)
  end

  it 'has one county' do
    zips = ZipCode.where.not(fips: nil).last(10)

    zips.each do |zip|
      county = County.find_by(fips: zip.fips)

      expect(zip.county.fips).to eq(county.fips)
    end
  end
end
