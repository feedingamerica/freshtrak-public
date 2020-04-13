# frozen_string_literal: true

# Serializer to strip away the cruft in the locations table
class AgencySerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip, :phone
  attribute :loc_name, key: :name
  attribute :loc_nickname, key: :nickname

  has_many :events

  def address
    return object.address1 if object.address2.empty?

    "#{object.address1} #{object.address2}"
  end
end
