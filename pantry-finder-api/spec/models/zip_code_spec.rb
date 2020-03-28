# frozen_string_literal: true

describe ZipCode, type: :model do
  let(:zip_code) { create(:zip_code) }

  it 'has one county' do
    expect(zip_code.county).to be_an_instance_of(County)
  end
end
