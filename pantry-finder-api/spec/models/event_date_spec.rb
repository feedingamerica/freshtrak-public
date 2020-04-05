# frozen_string_literal: true

describe EventDate, type: :model do
  let(:event_date) { create(:event_date) }

  it 'belongs to an event' do
    expect(event_date.event).to be_an_instance_of(Event)
  end

  context 'with scopes' do
    it 'defaults to dates in the future' do
      create(:event_date,
             event_date_key: (Time.zone.today - 2).to_s.delete('-'))
      expected_event_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_event_id])
    end

    it 'defaults to active and published events' do
      create(:event_date, status_id: 0, status_publish: 0)
      create(:event_date, status_id: 1, status_publish: 0)
      create(:event_date, status_id: 0, status_publish: 1)
      expected_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end

    it 'includes events today in the future scope' do
      event_today = create(:event_date,
                           event_date_key: Time.zone.today.to_s.delete('-'))
      expect(described_class.future.pluck(:id)).to eq([event_today.id])
    end
  end
end
