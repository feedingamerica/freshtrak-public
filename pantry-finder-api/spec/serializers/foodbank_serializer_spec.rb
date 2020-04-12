# frozen_string_literal: true

describe FoodbankSerializer do
  it 'JSON single addr, display_url is Config.default_fb_display_url' do
    serializer =
      described_class.new(
        Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                     city: 'the town', state: 'OH', zip: '12345',
                     phone_public_help: '999-999-9999')
      )

    exp_rslt = '{"address":"addr 1","city":"the town","state":"OH",' \
               '"zip":"12345","phone":"999-999-9999",'\
               '"name":"local foodbank","nickname":null,"display_url":"' \
               "#{Config.default_fb_display_url}" \
               '","fb_agency_locator_url":null,"fb_url":null,' \
               '"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'JSON combi addr, display_url is Config.default_fb_display_url' do
    serializer =
      described_class.new(
        Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                     address2: 'addr 2', city: 'the town', state: 'OH',
                     zip: '12345', phone_public_help: '999-999-9999')
      )

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","phone":"999-999-9999",' \
                 '"name":"local foodbank","nickname":null,' \
                 '"display_url":"' \
                 "#{Config.default_fb_display_url}" \
                 '","fb_agency_locator_url":null,' \
                 '"fb_url":null,"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'JSON when display_url is fb_agency_locator_url' do
    serializer =
      described_class.new(
        Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                     address2: 'addr 2', city: 'the town',
                     state: 'OH', zip: '12345',
                     phone_public_help: '999-999-9999',
                     fb_agency_locator_url: 'fb_agency_locator_url')
      )

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","phone":"999-999-9999",' \
                 '"name":"local foodbank","nickname":null,' \
                 '"display_url":"fb_agency_locator_url",' \
                 '"fb_agency_locator_url":"fb_agency_locator_url",'\
                 '"fb_url":null,"fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'JSON when display_url is fb_url' do
    serializer =
      described_class.new(
        Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                     address2: 'addr 2', city: 'the town', state: 'OH',
                     zip: '12345', phone_public_help: '999-999-9999',
                     fb_url: 'fb_url')
      )

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town","state":"OH",' \
                 '"zip":"12345","phone":"999-999-9999",' \
                 '"name":"local foodbank","nickname":null,' \
                 '"display_url":"fb_url","fb_agency_locator_url":null,' \
                 '"fb_url":"fb_url","fb_fano_url":null}'

    expect(serializer.to_json).to eql(exp_rslt)
  end

  it 'JSON when display_url is fb_fano_url' do
    serializer =
      described_class.new(
        Foodbank.new(fb_name: 'local foodbank', address1: 'addr 1',
                     address2: 'addr 2', city: 'the town', state: 'OH',
                     zip: '12345', phone_public_help: '999-999-9999',
                     fb_fano_url: 'fb_fano_url')
      )

    exp_rslt = '{"address":"addr 1 addr 2","city":"the town",' \
                 '"state":"OH","zip":"12345",' \
                 '"phone":"999-999-9999","name":"local foodbank",' \
                 '"nickname":null,"display_url":"fb_fano_url",' \
                 '"fb_agency_locator_url":null,"fb_url":null,' \
                 '"fb_fano_url":"fb_fano_url"}'
    expect(serializer.to_json).to eql(exp_rslt)
  end
end
