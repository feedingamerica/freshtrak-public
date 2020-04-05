# frozen_string_literal: true

require 'simplecov'
SimpleCov.start
require 'simplecov-cobertura'
SimpleCov.formatter = SimpleCov::Formatter::CoberturaFormatter

ENV['JETS_TEST'] = '1'
ENV['JETS_ENV'] ||= 'test'
# Ensures aws api never called.
# Fixture home folder does not contain ~/.aws/credentails
ENV['HOME'] = 'spec/fixtures/home'

require 'byebug'
require 'fileutils'
require 'jets'

if Jets.env == 'production'
  abort('The Jets environment is running in production mode!')
end
Jets.boot

require 'jets/spec_helpers'

module Helpers
  def payload(name)
    JSON.parse(IO.read("spec/fixtures/payloads/#{name}.json"))
  end
end

RSpec.configure do |c|
  c.include Helpers
  c.include FactoryBot::Syntax::Methods

  c.before(:suite) do
    FactoryBot.find_definitions
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  c.around do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  c.before do
    # Override readonly models so that factory bot can create records
    # rubocop:disable RSpec/AnyInstance
    allow_any_instance_of(ApplicationRecord)
      .to receive(:readonly?).and_return(false)
    # rubocop:enable RSpec/AnyInstance
  end
end
