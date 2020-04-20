# frozen_string_literal: true

describe EventDate, type: :model do
  let(:event_date) { create(:event_date) }

  it 'belongs to an event' do
    expect(event_date.event).to be_an_instance_of(Event)
  end

  it 'has many event hours' do
    event_hours =
      5.times.map { create(:event_hour, event_date: event_date) }

    expect(event_date.event_hours.pluck(:id)).to eq(event_hours.pluck(:id))
  end

  context 'with scopes' do
    it 'defaults to dates in the future' do
      create(:event_date,
             event_date_key: (Date.today - 2).to_s.delete('-'))

      expected_event_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_event_id])
    end

    it 'defaults to dates that have been published' do
      create(:event_date, status_publish: 1,
                          published_date_key: (Date.today + 2).to_s.delete('-'))
      create(:event_date, status_publish: 0,
                          published_date_key: (Date.today - 2).to_s.delete('-'))

      expected_event_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_event_id])
    end

    it 'defaults to active events' do
      create(:event_date, status_id: 0)

      expected_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end

    it 'defaults to dates for events that publish dates' do
      event = create(:event, status_publish_event_dates: 0)
      create(:event_date, event: event)

      expected_id = event_date.id
      expect(described_class.all.pluck(:id)).to eq([expected_id])
    end

    it 'includes events today in the future scope' do
      event_today = create(:event_date,
                           event_date_key: Date.today.to_s.delete('-'))

      expect(described_class.future.pluck(:id)).to eq([event_today.id])
    end

    it 'ignores event dates for events that do not publish dates' do
      event = create(:event, status_publish_event_dates: 0)
      create(:event_date, event: event)

      expect(described_class.event_publishes_dates).to be_empty
    end
  end
end
