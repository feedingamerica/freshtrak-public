# frozen_string_literal: true

# Literal ZipCode
class ZipCode < ApplicationRecord
  alias_attribute :id, :zip_id

  belongs_to :county, foreign_key: :fips, inverse_of: :zip_codes
end
