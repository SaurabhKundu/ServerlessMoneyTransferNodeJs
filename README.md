# ServerlessMoneyTransferNodeJs
A simple NodeJs based AWS serverless application to transfer money between accounts


## You can deploy the application directly in AWS Lambda with NodeJs runtime.
Pass the json in MoneyTransferRequest.json file as input.


The lambda function is tested locally in the `index.test.js` 
by mimicking the event and context arguments sent by AWS Lambda


## Also created a Rest web service using ExpressJs

### The endpoints are:

    HTTP GET: http://localhost:3000/
    HTTP GET: http://localhost:3000/accounts
    HTTP GET: http://localhost:3000/accounts/{id}
    HTTP POST: http://localhost:3000/transfers
    
Same MoneyTransferRequest.json can be used as a request body for transfer endpoint