# frozen_string_literal: true

# Literal ZipCode
class ZipCode < ApplicationRecord
  belongs_to :county, foreign_key: :fips, inverse_of: :zip_codes

  alias_attribute :id, :zip_id
end
