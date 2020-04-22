# frozen_string_literal: true

# Defines Event attributes to be returned in JSON
class EventSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip
  attribute :loc_id, key: :agency_id
  attribute :pt_latitude, key: :latitude
  attribute :pt_longitude, key: :longitude
  attribute :event_name, key: :name
  attribute :service_description, key: :service
  attribute :distance

  has_many :event_dates

  def address
    return object.address1 if object.address2.nil?

    "#{object.address1} #{object.address2}"
  end

  def distance
    zip_query = @instance_options[:zip_query]
    return '' if zip_query.blank?

    get_coordinates(zip_query)
  end

  def get_coordinates(zip_query)
    zip_lat = ::ZipCode.select(:latitude)
                       .where(zip_code: zip_query).to_a.first.latitude
    zip_long = ::ZipCode.select(:longitude)
                        .where(zip_code: zip_query).to_a.first.longitude
    calc_distance(zip_lat, zip_long)
  end

  def calc_distance(zip_lat, zip_long)
    Geocoder::Calculations.distance_between([zip_lat, zip_long],
                                            [object.pt_latitude,
                                             object.pt_longitude]).round(2)
  end
end
