# frozen_string_literal: true

describe Api::FoodbanksController, type: :controller do
  let(:zip_code) { create(:zip_code) }

  before do
    other_zip = create(:zip_code)
    5.times do
      create(:foodbank, county_ids: zip_code.county.id)
      create(:foodbank, county_ids: other_zip.county.id)
    end
  end

  it 'is indexable by zip_code' do
    get '/api/foodbanks', zip_code: zip_code.zip_code
    expect(response.status).to eq 200
    response_body = JSON.parse(response.body)
    expect(response_body['foodbanks'].count).to eq(5)
  end
end
