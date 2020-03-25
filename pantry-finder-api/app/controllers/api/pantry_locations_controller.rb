# frozen_string_literal: true

# Exposes the PantryLocation data
class Api::PantryLocationsController < ApplicationController
  def index
    locations = PantryLocation.serving(search_params)
    serialized_locations =
      ActiveModelSerializers::SerializableResource.new(locations).as_json

    render json: serialized_locations
  end

  def search_params
    params.require(:zip_code)
  end
end
