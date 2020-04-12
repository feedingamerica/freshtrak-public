# frozen_string_literal: true

ActiveModelSerializers.config.tap do |config|
  config.adapter = :json
  config.default_includes = '**'
end
