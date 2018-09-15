# Serverless framework Lambda function examples for learning

## These examples use Node v8.10.0 runtime

## Set up Serverless environment

First, install Serverless framework:
`npm install -g serverless`

Now you can use `serverless` (shorthand: `sls`) CLI to manage your Serverless functions.

Let's create a Serverless boilerplate template for a Node.js function:
`serverless create --template aws-nodejs --path <directory name for your project>`

You can find all of the available template [here](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates)

## Create your own functions

Put your function in **functions** directory:

Open **serverless.yml** and define your function under the functions block.

    hello:
      handler: functions/<function file name>.<exported handler>

Now you can invoke your Lambda function locally:
`serverless invoke local -f <function name>`

There's more advanced stuff you can do here, like passing input data to the Lambda function:
`serverless invoke local -f <function name> -p assets/event.json`
