# frozen_string_literal: true

# Serializer to strip away the cruft in the locations table
class PantryLocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :city, :state, :zip, :county, :phone
  attribute :name, &:loc_name
  attribute :nickname, &:loc_nickname
  attribute :address do |location|
    address = location.address1
    address += " #{location.address2}" unless location.address2.empty?
    address
  end
end
