# frozen_string_literal: true

describe Api::PantryLocationsController, type: :controller do
  it 'should be indexable by zip_code' do
    get '/api/pantry_locations', zip_code: '43201'
    expect(response.status).to eq 200
    response_body = JSON.parse(response.body)
    expect(response_body['pantry_locations'].count).to eq(467)
  end
end
