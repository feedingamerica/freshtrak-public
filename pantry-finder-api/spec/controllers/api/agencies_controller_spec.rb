# frozen_string_literal: true

describe Api::AgenciesController, type: :controller do
  let(:zip_code) { create(:zip_code) }

  before do
    other_zip = create(:zip_code)
    5.times do
      fb1 = create(:foodbank, county_ids: zip_code.county.id)
      fb2 = create(:foodbank, county_ids: other_zip.county.id)
      create(:agency, foodbank: fb1)
      create(:agency, foodbank: fb2)
    end
  end

  it 'should be indexable by zip_code' do
    get '/api/agencies', zip_code: zip_code.zip_code
    expect(response.status).to eq 200
    response_body = JSON.parse(response.body)
    expect(response_body['agencies'].count).to eq(5)
  end
end
