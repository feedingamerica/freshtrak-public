# AWS Infrastructure

Cloudfomation templates used to deploy the freshtrak infrastructure.
Currently there is very little infrastructure custom infrastructure needed to run the project so this project can be deployed using the aws cli.

## Deployment

#### UI

```
aws cloudformation deploy \
  --region us-east-2
  --template-file cloudfront.yml \
  --stack-name freshtrak-ui-beta \
  --parameter-overrides CertificateArn=<arn>
```

*Note*: Running this stack requires that there is a pre-existing ssl certificate for the domain being deployed. Since cloudfront is global the ACM certificate must be in `us-east-1` even though the cloudformation stack is in `us-east-2`.
