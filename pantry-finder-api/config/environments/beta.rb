# frozen_string_literal: true

Jets.application.configure do
  config.function.timeout = 60
  config.function.memory_size = 1536

  config.prewarm.enable = false # No need to keep testing api warm

  config.cors = 'https://beta.freshtrak.com'

  config.domain.cert_arn = 'arn:aws:acm:us-east-2:903047886911:certificate/a14b7ff1-e48f-4802-b72a-991b6d7dc538'
  config.domain.hosted_zone_name = 'freshtrak.com'
  config.domain.hosted_zone_id = '/hostedzone/Z08199011R108JA1EOCH7'
  config.domain.name = 'pantry-finder-api.beta.freshtrak.com'
end
