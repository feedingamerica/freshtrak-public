


# frozen_string_literal: true

# Exposes the PantryLocation data
class Api::FoodbanksController < ApplicationController
  def index
    foodbanks = Foodbank.serving_county(search_params)
    serialized_foodbanks =
      ActiveModelSerializers::SerializableResource.new(foodbanks).as_json

    render json: serialized_foodbanks
  end

  def search_params
    params.require(:zip_code)
  end
end
