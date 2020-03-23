# Pantry Finder API
Public API that exposes select tables from the PantryTrak datasource

Built and deployed using the [Ruby on Jets](https://rubyonjets.com/) framework

## Prerequisites

1. [Ruby 2.6.5](https://www.ruby-lang.org/en/downloads/)
2. [Bundler](https://bundler.io/)
3. [MySQL 8.0.x](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

## Setup

From the `pantry-finder-api` folder
```bash
bundle install # Install dependencies
./bin/setup_dev_db # Seed development and test databases
```

## Local development

Unit Tests
```bash
bundle exec rspec
```

Development server
```bash
bundle exec jets server
```

Console
```bash
bundle exec jets console
```
