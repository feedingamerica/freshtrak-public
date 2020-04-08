# frozen_string_literal: true

# Application environment variables defined here for global access
module Config
  class << self
    def default_fb_display_url
      @default_fb_display_url ||=
        ENV.fetch('DEFAULT_FB_DISPLAY_URL',
                  'https://www.feedingamerica.org/find-your-local-foodbank')
    end
  end
end
