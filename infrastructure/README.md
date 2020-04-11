# AWS Infrastructure

Cloudfomation templates used to deploy the freshtrak infrastructure.
Currently there is very little infrastructure custom infrastructure needed to run the project so this project can be deployed using the aws cli.

## Deployment

#### UI
```
aws cloudformation deploy \
  --template-file cloudfront.yml \
  --stack-name freshtrak-ui-beta \
  --parameter-overrides CertificateArn=<arn>
```
