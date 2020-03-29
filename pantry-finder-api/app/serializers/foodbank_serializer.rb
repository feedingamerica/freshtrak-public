#frozen_string_literal: true

# Serializer to strip away the cruft in the locations table
class FoodbankSerializer < ActiveModel::Serializer
  attribute :id
  attribute :address1, key: :address
  attributes :city, :state, :zip
  attribute  :billing_contact_phone, key: :phone
  attributes :fb_name, :fb_nickname
  attributes:fb_url, :fb_agency_locator_url
end

