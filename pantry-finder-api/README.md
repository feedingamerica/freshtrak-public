# Pantry Finder API
Public API that exposes select tables from the PantryTrak datasource

Built and deployed using the [Ruby on Jets](https://rubyonjets.com/) framework

## Prerequisites

1. [Ruby 2.5.3](https://www.ruby-lang.org/en/downloads/)
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

### Updating the schema file

This api exposes an existing data source. From time to time, new tables or columns are added to the source database. The `db/schema.rb` file needs to be kept in sync when this happens. It's also nice to take a fresh dump of the db at that time to make local development easier.
```bash
DB_HOST=<rds_host> DB_USER=<user> DB_PASS=<password> DB_NAME=freshtrak_public bundle exec jets db:schema:dump
```
```bash
rm ./setup/seed.sql.zip
mysqldump -h <rds_host> -u <user> -p<password> freshtrak_public > setup/seed.sql
zip setup/seed.sql.zip setup/seed.sql
rm setup/seed.sql
```

## Deployment

This project is deployed using the [jets cli](https://rubyonjets.com/docs/deploy/).
Under the hood it creates nested [CloudFormation stacks](https://rubyonjets.com/docs/debugging/cloudformation/).
The relevant configuration files are at `config/application.rb` and `config/environments/*`.
Environment variables are set using the `.env.*` files.

Deploying to beta
```
AWS_PROFILE=<profile> AWS_REGION=us-east-2 JETS_ENV=beta bundle exec jets deploy
```
