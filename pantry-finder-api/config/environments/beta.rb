# frozen_string_literal: true

Jets.application.configure do
  # Lambda config
  config.function.timeout = 45 # api gateway has an implicit timeout of 30 secs
  config.function.memory_size = 1536

  config.prewarm.enable = false # No need to keep testing api warm

  # VPC Config
  #   freshtrak_cscbus vpc-06b80390c45f8e8e0
  #   Must be deployed to private subnets that have access
  #   to a NAT Gateway. When deployed to public subnets
  #   the lambda seems to just timeout.
  config.function.vpc_config = {
    subnet_ids: %w[subnet-0dcec794080e1b017],
    security_group_ids: %w[sg-03d1217e55919958e]
  }

  # API Gateway config
  config.cors = 'https://beta.freshtrak.com'

  config.domain.cert_arn =
    'arn:aws:acm:us-east-2:903047886911:certificate/' \
    'a14b7ff1-e48f-4802-b72a-991b6d7dc538'
  config.domain.hosted_zone_name = 'freshtrak.com'
  config.domain.hosted_zone_id = '/hostedzone/Z08199011R108JA1EOCH7'
  config.domain.name = 'pantry-finder-api.beta.freshtrak.com'
end
