# frozen_string_literal: true

# Enumerated list of service categories
class ServiceCategory < ApplicationRecord
  alias_attribute :id, :service_category

  has_many :service_types, foreign_key: :service_category1,
                           inverse_of: :service_category,
                           dependent: :restrict_with_exception
end
