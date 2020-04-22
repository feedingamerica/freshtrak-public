# frozen_string_literal: true

module Api
  # Exposes the Agency location data
  class AgenciesController < ApplicationController
    before_action :set_agencies, only: [:index]

    def index
      if (@zip = search_params[:zip_code])
        @agencies = @agencies.by_zip_code(@zip)
      end
      if (date = search_params[:event_date])
        @agencies = @agencies.with_event_after(date.delete('-'))
      end

      render json: serialized_agencies
    end

    private

    def search_params
      params.permit(:zip_code, :event_date)
    end

    def set_agencies
      @agencies =
        if search_params.empty?
          Agency.none
        else
          Agency.distinct
        end
    end

    def serialized_agencies
      ActiveModelSerializers::SerializableResource.new(@agencies,
                                                       zip_query: @zip).as_json
    end
  end
end
