# frozen_string_literal: true

# Base Job
class ApplicationJob < Jets::Job::Base
  # Adjust to increase the default timeout for all Job classes
  class_timeout 60
end
