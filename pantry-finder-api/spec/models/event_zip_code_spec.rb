# frozen_string_literal: true

describe EventZipCode, type: :model do
  let(:event_zip_code) { create(:event_zip_code) }

  it 'belongs to an event' do
    expect(event_zip_code.event).to be_an_instance_of(Event)
  end

  it 'has one agency' do
    expect(event_zip_code.agency).to be_an_instance_of(Agency)
  end

  context 'with scopes' do
    it 'defaults to active zip codes' do
      create(:event_zip_code, status_id: 1, geo_type_id: 2)
      create(:event_zip_code, status_id: 0, geo_type_id: 1)
      expected_id = event_zip_code.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end
  end
end
