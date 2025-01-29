source "https://rubygems.org"

gem "jekyll", "~> 4.4.0"
gem "minima", "~> 2.5"
gem "webrick"
gem "sinatra", "~> 3.1.0"  # Add explicit sinatra dependency
gem "sinatra-contrib", "~> 3.1.0"  # Add explicit sinatra-contrib dependency

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-admin", "~> 0.11.1"  # Specify version explicitly
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
