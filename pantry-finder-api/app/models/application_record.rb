# frozen_string_literal: true

# Base model
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  # This app exposes an existing datasource
  # Let's treat it as readonly
  after_initialize :readonly!
end
