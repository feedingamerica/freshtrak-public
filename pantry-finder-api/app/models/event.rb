# frozen_string_literal: true

# Physical event at a location
class Event < ApplicationRecord
  alias_attribute :id, :event_id

  belongs_to :agency, foreign_key: :loc_id, inverse_of: :events
  belongs_to :service_type, foreign_key: :service_id, inverse_of: :events
  has_one :service_category, through: :service_type
  has_many :event_zip_codes, foreign_key: :event_id, inverse_of: :event,
                             dependent: :restrict_with_exception
  has_many :event_dates, foreign_key: :event_id, inverse_of: :event,
                         dependent: :restrict_with_exception

  default_scope { active.published }
  scope :active, -> { where(status_id: 1) }
  scope :published, -> { where(status_publish_event: 1) }
  scope :publishes_dates, -> { where(status_publish_event_dates: 1) }

  def service_description
    service_category.service_category_name
  end
end
