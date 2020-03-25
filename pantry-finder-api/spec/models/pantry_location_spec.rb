# frozen_string_literal: true

describe PantryLocation, type: :model do
  it 'should connect to the locations table' do
    expect(PantryLocation.count).to be > 0
  end

  it 'should retrieve a pantry_location' do
    expect(PantryLocation.last).to be_an_instance_of(PantryLocation)
  end

  it 'has one foodbank' do
    fb_ids = Foodbank.pluck(:id)
    pantry_locations = PantryLocation.where(primary_fb_id: fb_ids).last(10)

    pantry_locations.each do |location|
      foodbank = Foodbank.find_by(id: location.primary_fb_id)

      expect(location.foodbank.id).to eq(foodbank.id)
    end
  end

  it 'scopes by pantries that serve a zipcode' do
    # TODO: Figure out how to test this whithout replicating source code
  end
end
