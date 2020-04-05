# frozen_string_literal: true

# Service provided at a foodbank/pantry
class ServiceType < ApplicationRecord
  alias_attribute :id, :service_id

  has_many :events, foreign_key: :service_id, inverse_of: :service_type,
                    dependent: :restrict_with_exception
  belongs_to :service_category, foreign_key: :service_category1,
                                inverse_of: :service_types
end
