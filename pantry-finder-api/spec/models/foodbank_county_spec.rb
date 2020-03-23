describe FoodbankCounty, type: :model do
  it 'should connect to the foodbank_counties table' do
    expect(FoodbankCounty.count).to be > 0
  end

  it 'should retrieve a foodbank_county' do
    expect(FoodbankCounty.last).to be_an_instance_of(FoodbankCounty)
  end
end
