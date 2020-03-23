describe Event, type: :model do
  it 'should connect to the events table' do
    expect(Event.count).to be > 0
  end

  it 'should retrieve an event' do
    expect(Event.last).to be_an_instance_of(Event)
  end
end
