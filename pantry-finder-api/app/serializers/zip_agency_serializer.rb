# frozen_string_literal: true

# Serializer to ensure agencies are children of ZipAgencies
class ZipAgencySerializer < ActiveModel::Serializer
  attributes :id

  has_many :agencies
end
