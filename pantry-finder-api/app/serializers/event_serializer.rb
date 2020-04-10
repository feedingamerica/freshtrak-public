# frozen_string_literal: true

# Defines Event attributes to be returned in JSON
class EventSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip,
             :pt_latitude, :pt_longitude, :loc_id
  attribute :event_name, key: :name
  attribute :service_description, key: :service

  has_many :event_dates

  def address
    return object.address1 if object.address2.nil?

    "#{object.address1} #{object.address2}"
  end
end
