describe Foodbank, type: :model do
  it 'should connect to the foodbanks table' do
    expect(Foodbank.count).to be > 0
  end

  it 'should retrieve a foodbank' do
    expect(Foodbank.last).to be_an_instance_of(Foodbank)
  end
end
