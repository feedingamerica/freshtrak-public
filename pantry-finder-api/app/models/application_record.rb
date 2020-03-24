# frozen_string_literal: true

# Base model
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
