# frozen_string_literal: true

describe Api::AgenciesController, type: :controller do
  it 'should be indexable by zip_code' do
    get '/api/agencies', zip_code: '43201'
    expect(response.status).to eq 200
    response_body = JSON.parse(response.body)
    expect(response_body['agencies'].count).to eq(467)
  end
end
