# AWS SAM Cli generate event reference

## Service: alexa-skills-kit

```bash
sam local generate-event alexa-skills-kit end-session
```
### Generates an Amazon Alexa End Session Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***

```bash
sam local generate-event alexa-skills-kit intent-answer
```
### Generates an Amazon Alexa Intent Answer Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***

```bash
sam local generate-event alexa-skills-kit intent-getnewfact
```
### Generates an Amazon Alexa Intent GetNewFact Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***

```bash
sam local generate-event alexa-skills-kit intent-mycoloris
```
### Generates an Amazon Alexa Intent MyColorIs Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***

```bash
sam local generate-event alexa-skills-kit intent-recipe
```
### Generates an Amazon Alexa Intent Recipe Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***

```bash
sam local generate-event alexa-skills-kit start-session
```
### Generates an Amazon Alexa Start Session Event

#### Arguments:

`--session-id` [default: 123456789012]

`--user-id` [default: testUser]

`--application-id` [default: 987654321]

`--request-id` [default: 1234]


***


## Service: alexa-smart-home

```bash
sam local generate-event alexa-smart-home smart-home-control-turn-off-request
```
### Generates an Amazon Alexa Smart Home Control Turn Off Request Event
***

```bash
sam local generate-event alexa-smart-home smart-home-control-turn-on-request
```
### Generates an Amazon Alexa Smart Home Control Turn On Request Event
***

```bash
sam local generate-event alexa-smart-home smart-home-discovery-request
```
### Generates an Amazon Alexa Smart Home Discovery Request Event
***


## Service: apigateway

```bash
sam local generate-event apigateway authorizer
```
### Generates an Amazon API Gateway Authorizer Event

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--stage` [type: string, default: prod]

`--method` [type: string, default: POST]

`--resource` [type: string, default: {proxy+}]

`--restApiId` [type: string, default: example]


***

```bash
sam local generate-event apigateway aws-proxy
```
### Generates an Amazon API Gateway AWS Proxy Event

#### Arguments:

`--body` [type: string, default: {"test":"body"}, encoding: base64]

`--stage` [type: string, default: prod]

`--method` [type: string, default: POST]

`--resource` [type: string, default: /{proxy+}]

`--path` [type: string, default: path/to/resource]

`--account-id` [default: 123456789012]

`--dns-suffix` [default: us-east-1.amazonaws.com]


***


## Service: batch

```bash
sam local generate-event batch get-job
```
### Generates an AWS Batch Get Job Event
***

```bash
sam local generate-event batch submit-job
```
### Generates an AWS Batch Submit Job Event
***


## Service: cloudformation

```bash
sam local generate-event cloudformation create-request
```
### Generates an AWS CloudFormation Create Request Event

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--stack` [type: string, default: MyStack]


***


## Service: cloudfront

```bash
sam local generate-event cloudfront ab-test
```
### Generates an Amazon CloudFront A/B Test Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront access-request-in-response
```
### Generates an Amazon CloudFront Access Request in Response Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront http-redirect
```
### Generates an Amazon CloudFront HTTP Redirect Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront modify-querystring
```
### Generates an Amazon CloudFront Modify QueryString Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront modify-response-header
```
### Generates an Amazon CloudFront Modify Response Header Event
***

```bash
sam local generate-event cloudfront multiple-remote-calls-aggregate-response
```
### Generates an Amazon CloudFront Multiple Remote Calls Aggregate Response Event

#### Arguments:

`--uri` [default: /forecast/Seattle:NewYork:Chicago:SanFrancisco]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront normalize-querystring-to-improve-cache-hit
```
### Generates an Amazon CloudFront Normalize Querystring Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront redirect-on-viewer-country
```
### Generates an Amazon CloudFront Redirect on Viewer Country Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront redirect-unauthenticated-users
```
### Generates an Amazon CloudFront Redirect Unauthenticated Users Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront response-generation
```
### Generates an Amazon CloudFront Response Generation Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront serve-object-on-viewer-device
```
### Generates an Amazon CloudFront Serve Object on Viewer Device Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***

```bash
sam local generate-event cloudfront simple-remote-call
```
### Generates an Amazon CloudFront Simple Remote Call Event

#### Arguments:

`--uri` [default: /test]

`--method` [default: GET]


***


## Service: codecommit

```bash
sam local generate-event codecommit repository
```
### Generates an AWS CodeCommit Repository Event 

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--repository` [type: string, default: my-repo]

`--trigger` [type: string, default: my-trigger]

`--custom-data` [type: string, default: this is custom data]


***


## Service: codepipeline

```bash
sam local generate-event codepipeline job
```
### Generates an AWS CodePipeline Job Event

#### Arguments:

`--account-id` [default: 123456789012]

`--input-bucket` [type: string, default: example-bucket]

`--input-key` [type: string, default: test/key]

`--output-bucket` [type: string, default: example-bucket2]

`--output-key` [type: string, default: test/key2]


***


## Service: cognito

```bash
sam local generate-event cognito sync-trigger
```
### Generates an Amazon Cognito Sync Trigger Event

#### Arguments:

`--region` [default: us-east-1]


***


## Service: config

```bash
sam local generate-event config item-change-notification
```
### Generates an AWS Config Configuration Item Change Notification Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]


***

```bash
sam local generate-event config oversized-item-change-notification
```
### Generates an AWS Config Oversized Configuration Item Change Notification Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]


***

```bash
sam local generate-event config periodic-rule
```
### Generates an AWS Config Periodic Rule Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]


***


## Service: connect

```bash
sam local generate-event connect contact-flow-event
```
### Generates an Amazon Connect Contact Flow Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]

`--contact-id` [default: 5ca32fbd-8f92-46af-92a5-6b0f970f0efe]

`--phone-number` [default: +11234567890]


***


## Service: dynamodb

```bash
sam local generate-event dynamodb update
```
### Generates an Amazon DynamoDB Update Event

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--table` [type: string, default: ExampleTableWithStream]


***


## Service: cloudwatch

```bash
sam local generate-event cloudwatch logs
```
### Generates an Amazon Cloudwatch Logs Event
***

```bash
sam local generate-event cloudwatch scheduled-event
```
### Generates an Amazon CloudWatch Events Scheduled Event

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--rule` [type: string, default: ExampleRule]


***


## Service: kinesis

```bash
sam local generate-event kinesis get-records
```
### Generates an Amazon Kinesis Data Stream Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--sequence` [type: string, default: 49545115243490985018280067714973144582180062593244200961]

`--data` [type: string, default: Hello, this is a test 123., encoding: base64]

`--partition-key` [type: string, default: partitionKey-03]


***

```bash
sam local generate-event kinesis kinesis-firehose
```
### Generates an Amazon Kinesis Data Firehose Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--data` [default: SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IDEyMy4=]


***

```bash
sam local generate-event kinesis analytics
```
### Generates an Amazon Kinesis Data Analytics Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--account-id` [default: 123456789012]

`--application` [type: string, default: example-application]

`--stream` [type: string, default: example-stream]

`--data` [type: string, default: This is a test from Kinesis Analytics, encoding: base64]


***

```bash
sam local generate-event kinesis analytics-compressed
```
### Generates an Amazon Kinesis Data Analytics Compressed Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--account-id` [default: 123456789012]

`--application` [type: string, default: example-application]

`--stream` [type: string, default: example-stream]

`--data` [type: string, default: H4sIAAAAAAAA/6vmUspLzE1VslLKTsxNzFHS4VJKTEkpSi0uBgol5SRmKHHVAgDd1tysJAAAAA==]


***

```bash
sam local generate-event kinesis analytics-dynamodb
```
### Generates an Amazon Kinesis Data Analytics DynamoDB Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--account-id` [default: 123456789012]

`--application` [type: string, default: example-application]

`--stream` [type: string, default: example-stream]

`--data` [type: string, default: {"ROWTIME_TIMESTAMP":"2017-12-15 01:09:50.000","VEHICLEID":"5","VEHICLECOUNT":18}, encoding: base64]


***

```bash
sam local generate-event kinesis analytics-kpl
```
### Generates an Amazon Kinesis Data Analytics KPL Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--account-id` [default: 123456789012]

`--application` [type: string, default: example-application]

`--stream` [type: string, default: example-stream]


***

```bash
sam local generate-event kinesis apachelog
```
### Generates an Amazon Kinesis Data Firehose Apachelog Event

#### Arguments:

`--region` [default: us-east-1]

`--data` [default: NjQuMjQyLjg4LjEwIC0gLSBbMDcvTWFyLzIwMDQ6MTY6MTA6MDIgLTA4MDBdICJHRVQgL21haWxtYW4vbGlzdGluZm8vaHNkaXZpc2lvbiBIVFRQLzEuMSIgMjAwIDYyOTE==]


***

```bash
sam local generate-event kinesis cloudwatch-logs-processor
```
### Generates an Amazon Kinesis Data Firehose Cloudwatch Logs Processor Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]


***

```bash
sam local generate-event kinesis streams-as-source
```
### Generates an Amazon Kinesis Data Firehose Streams as Source Event

#### Arguments:

`--partition` [default: aws]

`--region` [default: us-east-1]

`--partition-key` [type: string, default: partitionKey-03]

`--data` [type: string, default: SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IDEyMy4=]

`--sequence` [type: string, default: 49545115243490985018280067714973144582180062593244200961]


***

```bash
sam local generate-event kinesis syslog
```
### Generates an Amazon Kinesis Data Firehose Syslog Event

#### Arguments:

`--region` [default: us-east-1]

`--data` [type: string, default: SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IDEyMy4=]


***


## Service: lex

```bash
sam local generate-event lex book-car
```
### Generates an Amazon Lex Book Car Event
***

```bash
sam local generate-event lex book-hotel
```
### Generates an Amazon Lex Book Hotel Event
***

```bash
sam local generate-event lex make-appointment
```
### Generates an Amazon Lex Make Appointment Event
***

```bash
sam local generate-event lex order-flowers
```
### Generates an Amazon Lex Order Flowers Event
***


## Service: rekognition

```bash
sam local generate-event rekognition s3-request
```
### Generates an Amazon Rekognition S3 Request Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--bucket` [type: string, default: example-bucket]

`--key` [type: string, default: test/key, encoding: url]


***


## Service: s3

```bash
sam local generate-event s3 delete
```
### Generates an Amazon S3 Delete Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--bucket` [type: string, default: example-bucket]

`--key` [type: string, default: test/key, encoding: url]


***

```bash
sam local generate-event s3 put
```
### Generates an Amazon S3 Put Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--bucket` [type: string, default: example-bucket]

`--key` [type: string, default: test/key, encoding: url]


***


## Service: ses

```bash
sam local generate-event ses email-receiving
```
### Generates an Amazon SES Email Receiving Event

#### Arguments:

`--region` [default: us-east-1]

`--partition` [default: aws]

`--account-id` [default: 123456789012]

`--dns-suffix` [default: us-east-1.amazonaws.com]


***


## Service: sns

```bash
sam local generate-event sns notification
```
### Generates an Amazon SNS Topic Notification Event

#### Arguments:

`--account-id` [default: 123456789012]

`--partition` [default: aws]

`--region` [default: us-east-1]

`--topic` [type: string, default: ExampleTopic]

`--subject` [type: string, default: example subject]

`--message` [type: string, default: example message]


***


## Service: sqs

```bash
sam local generate-event sqs receive-message
```
### Generates an Amazon SQS Event

#### Arguments:

`--partition` [default: aws]

`--region` [type: string, default: us-east-1]

`--account-id` [default: 123456789012]

`--queue-name` [default: MyQueue]


***


## Service: stepfunctions

```bash
sam local generate-event stepfunctions error
```
### Generates an AWS StepFunctions Error Event
***
