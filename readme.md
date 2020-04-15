# CubeJS Typescript Serverless Demo

## Getting Started

This demo requires a .env files with your elasticsearch credentials

```txt
CUBEJS_AWS_REGION=eu-west-1
CUBEJS_API_SECRET=CUBE_JS

# only used with aws Elasticsearch Service (OpenDistro)
CUBEJS_EXT_DB_HOST=
# ElasticSearch cloud config (X-Pack dialect)
ELASTIC_CLOUD_ID=
ELASTIC_USER=
ELASTIC_PASS=
```

I have privided my `.vscode` folder for debugging purposes and the server will run at port 4000

## Dialects

Currently there are 2 distinct ElasticSearch SQL dialects that I have found, AWS and X-Pack

- AWS
  - Provides what seems to look like an ISO SQL but with limited elasticsearch functions
- X-Pack
  - Provides more functions but you are limited to 1 index as JOIN **ARE NOT** support at the time of writing
