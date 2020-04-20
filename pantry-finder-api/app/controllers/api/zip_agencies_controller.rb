# frozen_string_literal: true

module Api
  # Exposes the Agencies, Events, and Event Dates based on geographic rules
  class ZipAgenciesController < ApplicationController
    def index
      return unless (zip = search_params[:zip_code])

      @zip_agencies = ZipAgency.by_zip_code(zip)
      render json:
      ActiveModelSerializers::SerializableResource.new(@zip_agencies,
                                                       zip_query: zip)
    end

    def show
      @zip_agencies = ZipAgency.find_by(id: params[:id])
      render json:
      ActiveModelSerializers::SerializableResource.new(@zip_agencies)
    end

    def search_params
      params.permit(:zip_code, :id)
    end
  end
end
