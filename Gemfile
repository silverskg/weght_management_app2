source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

gem 'rails', '~> 5.2.4'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'bootsnap', '>= 1.1.0', require: false

# ログイン機能
gem 'devise'
# 日本語化
gem 'rails-i18n', '~> 5.1'
gem 'devise-i18n'

# Bootstrap（簡単に見た目を整えられる）
gem 'bootstrap', '~> 4.4.1'
gem 'jquery-rails'

# ログイン関連ページにBootstrapを適用するGem
gem 'devise-bootstrap-views', '~> 1.0'

# Chart.js（グラフ表示）
gem 'chart-js-rails'

# flatpickr（カレンダー）
gem 'flatpickr'

# Gon（コントローラから Javascript に変数を渡せるようにする）
gem 'gon'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry-byebug'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end


gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
