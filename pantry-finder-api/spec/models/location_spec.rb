describe Location, type: :model do
  it 'should connect to the locations table' do
    expect(Location.count).to be > 0
  end

  it 'should retrieve a location' do
    expect(Location.last).to be_an_instance_of(Location)
  end
end
