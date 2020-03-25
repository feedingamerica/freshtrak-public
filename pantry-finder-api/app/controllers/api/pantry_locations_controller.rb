# frozen_string_literal: true

# Exposes the PantryLocation data
class Api::PantryLocationsController < ApplicationController
  def index
    locations = PantryLocation.serving(search_params)

    render json: PantryLocationSerializer.new(locations)
  end

  def search_params
    params.require(:zip_code)
  end
end
