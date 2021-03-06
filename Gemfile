# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.1"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 6.0.3", ">= 6.0.3.2"
# Shakacode react_on_rails gem
gem "react_on_rails", "~> 12.0"
# Use postgresql as the database for Active Record
gem "pg", ">= 0.18", "< 2.0"
# Use Puma as the app server
gem "puma", "~> 4.1"
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem "webpacker", "~> 4.0"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.7"

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.2", require: false

gem "mini_racer", platforms: :ruby

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem "web-console", ">= 3.3.0"
end

group :development, :test do
  gem "listen", "~> 3.2"

  gem "bundler-audit", "~> 0.7.0", require: false
  gem "rubocop", "~> 0.88.0", require: false
  gem "ruby-lint", "~> 2.3", require: false
  gem "scss_lint", "~> 0.59.0", require: false

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-commands-rspec", "~> 1.0"

  # Manage application processes
  gem "foreman", "~> 0.87.1"

  # Favorite debugging gems
  gem "pry", "~> 0.13.1"
  gem "pry-byebug", "~> 3.9"
  gem "pry-doc", "~> 1.1"
  gem "pry-rails", "~> 0.3.9"
  gem "pry-rescue", "~> 1.5"
  gem "pry-stack_explorer", "~> 0.5.1"
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara", ">= 2.15"
  gem "capybara-screenshot", "~> 1.0"
  gem "rspec-rails", "~> 4.0"
  gem "selenium-webdriver"
  # Easy installation and use of web drivers to run system tests with browsers
  gem "webdrivers"
end
