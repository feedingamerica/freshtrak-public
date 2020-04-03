# frozen_string_literal: true

require 'byebug'

describe FoodbankSerializer do
  it 'creates JSON for single address field display_url is ""' do
    serializer = FoodbankSerializer.new \
      Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                   city: 'the town', state: 'OH', zip: '12345')

    exp_rslt = '{"address":"addr 1","city":"the town","state":"OH",' \
               '"zip":"12345","name":"local foodbank",' \
               '"nickname":null,"display_url":"","' \
               'fb_agency_locator_url":null,"fb_url":null,' \
               '"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'creates JSON for combined address, display_url is ""' do
    serializer = FoodbankSerializer.new \
      Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                   address2: 'addr 2', city: 'the town', state: 'OH',
                   zip: '12345')

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","name":"local foodbank","nickname":null,' \
                 '"display_url":"","fb_agency_locator_url":null,' \
                 '"fb_url":null,"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'creates JSON when display_url is fb_agency_locator_url' do
    serializer = FoodbankSerializer.new \
      Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1', \
                   address2: 'addr 2', city: 'the town', \
                   state: 'OH', zip: '12345', \
                   fb_agency_locator_url: 'fb_agency_locator_url')

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","name":"local foodbank","nickname":null,' \
                 '"display_url":"fb_agency_locator_url",' \
                 '"fb_agency_locator_url":"fb_agency_locator_url",'\
                 '"fb_url":null,"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'creates JSON when display_url is fb_url' do
    serializer = FoodbankSerializer.new \
      Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1', \
                   address2: 'addr 2', city: 'the town', state: 'OH', \
                   zip: '12345', fb_url: 'fb_url')

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","name":"local foodbank","nickname":null,' \
                 '"display_url":"fb_url","fb_agency_locator_url":null,' \
                 '"fb_url":"fb_url","fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'creates JSON when display_url is fb_fano_url' do
    serializer = FoodbankSerializer.new \
      Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1', \
                   address2: 'addr 2', city: 'the town', state: 'OH', \
                   zip: '12345', fb_fano_url: 'fb_fano_url')

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town",' \
                 '"state":"OH","zip":"12345","name":"local foodbank",' \
                 '"nickname":null,"display_url":"fb_fano_url",' \
                 '"fb_agency_locator_url":null,"fb_url":null,' \
                 '"fb_fano_url":"fb_fano_url"}'
    expect(serializer.to_json).to eql(exp_rslt)
  end
end
