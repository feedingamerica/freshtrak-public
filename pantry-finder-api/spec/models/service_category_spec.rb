# frozen_string_literal: true

describe ServiceCategory, type: :model do
  let(:service_category) { create(:service_category) }

  it 'has many service types' do
    service_types = 5.times.map do
      create(:service_type, service_category: service_category)
    end

    expect(service_category.service_types.pluck(:id))
      .to eq(service_types.pluck(:id))
  end
end
