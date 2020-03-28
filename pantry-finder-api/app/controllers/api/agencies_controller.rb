# frozen_string_literal: true

module Api
  # Exposes the PantryLocation data
  class AgenciesController < ApplicationController
    def index
      agencies = Agency.by_foodbank(search_params)

      serialized_agencies =
        ActiveModelSerializers::SerializableResource.new(agencies).as_json

      render json: serialized_agencies
    end

    def search_params
      params.require(:zip_code)
    end
  end
end
