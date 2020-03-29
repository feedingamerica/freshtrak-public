# frozen_string_literal: true

# Serializer to strip away the cruft in the locations table
class FoodbankSerializer < ActiveModel::Serializer
  attribute :id
  attributes :address1, :address2, :city, :state, :zip
  # TODO: attribute  :phone_public_help, key: :phone
  attributes :fb_name, :fb_nickname
  attributes :fb_agency_locator_url, :fb_url, :fb_fano_url
end
