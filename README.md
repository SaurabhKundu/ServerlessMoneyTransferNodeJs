# ServerlessMoneyTransferNodeJs
A simple NodeJs based AWS serverless application to transfer money between accounts


## You can deploy the application directly in AWS Lambda with NodeJs runtime.
Pass the json in MoneyTransferRequest.json file as input. Entry point for Lambda function is [`index.js`](<https://github.com/SaurabhKundu/ServerlessMoneyTransferNodeJs/blob/main/function/index.js>).


The lambda function is tested locally in the [`index.test.js` ](https://github.com/SaurabhKundu/ServerlessMoneyTransferNodeJs/blob/main/function/index.test.js)
by mimicking the event and context arguments sent by AWS Lambda

To test the Lambda function locally, run `npm run test` [here](https://github.com/SaurabhKundu/ServerlessMoneyTransferNodeJs).

## Also created a Rest web service using ExpressJs
To start the express server, go to the [directory](https://github.com/SaurabhKundu/ServerlessMoneyTransferNodeJs/tree/main/function/controller)  and do `node AccountController.js`.

### The endpoints are:

    HTTP GET: http://localhost:3000/
    HTTP GET: http://localhost:3000/accounts
    HTTP GET: http://localhost:3000/accounts/{id}
    HTTP POST: http://localhost:3000/transfers
    
Same MoneyTransferRequest.json can be used as a request body for transfer endpoint