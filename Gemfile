source "https://rubygems.org"
ruby "3.4.1"

gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"
gem "logger", "~> 1.5"
gem "csv", "~> 3.2"
gem "webrick", "~> 1.8"
gem "safe_yaml", "1.0.4"
gem "psych", "~> 5.1"
gem "yaml", "~> 0.3.0"
gem "stringio", "~> 3.1"
gem "date", "~> 3.4"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Windows Directory Monitor
platforms :mingw, :x64_mingw, :mswin do
  gem 'wdm', '>= 0.1.0'
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
