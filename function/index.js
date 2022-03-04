const accountService = require('../function/service/AccountService.js');

/**
 * AWS Lambda handler
 * 
 * @param {event} event 
 * @param {context} context 
 */
exports.handler = async function(event, context) {

  console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env))
  console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))

  return handleTransfers(event);
  
}

handleTransfers = function(event) {
  let beneficiaryAccountNumber = event.beneficiaryAccountNumber;
  let senderAccountNumber = event.senderAccountNumber;
  let accountType = event.accountType;
  let balance = event.balance;
  
  return accountService.transferBalance(beneficiaryAccountNumber, senderAccountNumber, accountType, balance);
}

var serialize = function(object) {
  return JSON.stringify(object, null, 2)
}