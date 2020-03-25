# frozen_string_literal: true

# Exposes the PantryLocation data
class Api::PantryLocationsController < ApplicationController
  def index
    locations = PantryLocation.serving(search_params)

    render json: ActiveModel::SerializableResource.new(locations).as_json
  end

  def search_params
    params.require(:zip_code)
  end
end
