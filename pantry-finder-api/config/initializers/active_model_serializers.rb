# frozen_string_literal: true

ActiveModelSerializers.config.tap do |config|
  config.adapter = :json
end
