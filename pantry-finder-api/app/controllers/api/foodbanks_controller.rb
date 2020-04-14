# frozen_string_literal: true

module Api
  # Exposes the Foodbank data
  class FoodbanksController < ApplicationController
    def index
      foodbanks = Foodbank.by_county(search_params)
      serialized_foodbanks =
        ActiveModelSerializers::SerializableResource.new(foodbanks).as_json

      render json: serialized_foodbanks
    end

    private

    def search_params
      params.require(:zip_code)
    end
  end
end
