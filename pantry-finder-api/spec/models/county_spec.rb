# frozen_string_literal: true

describe County, type: :model do
  it 'should connect to the counties table' do
    expect(County.count).to be > 0
  end

  it 'should retrieve a county' do
    expect(County.last).to be_an_instance_of(County)
  end
end
