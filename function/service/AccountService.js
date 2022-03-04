const Account = require('../model/Account.js')

exports.getAllAccounts = (request, response) => {
    response.status(200).contentType('application/json').send(JSON.stringify(Account));
}

exports.getAccountById = (request, response) => {
    let id = request.params.id;
    let account = null;
    for(acc in Account) {
        if(Account[acc].accountNumber === id) {
            account = Account[acc];
        }
    }
    response.status(200).contentType('application/json').send(JSON.stringify(account));
}

exports.transfer = (request, response) => {
    let beneficiaryAccountNumber = request.body.beneficiaryAccountNumber;
    let senderAccountNumber = request.body.senderAccountNumber;
    let accountType = request.body.accountType;
    let balance= request.body.balance;

    validateAccountType(accountType);

    let creditBalance = creditAccount(beneficiaryAccountNumber, balance);
    let debitBalance = debitAccount(senderAccountNumber, balance);

    response.status(200).contentType('application/json').send({
        "debitBalance": debitBalance,
        "creditBalance": creditBalance
    });
}

exports.transferBalance = function(beneficiaryAccountNumber, senderAccountNumber, accountType, balance) {
    validateAccountType(accountType);
    let creditBalance = creditAccount(beneficiaryAccountNumber, balance);
    let debitBalance = debitAccount(senderAccountNumber, balance);

    return {
            "debitBalance": debitBalance,
            "creditBalance": creditBalance
           }
}

validateAccountType = function(accountType) {
    if(accountType == "CURRENT") {
        log.error("cannot transfer balance if the account type is current");
    }
}

creditAccount = function(beneficiaryAccountNumber, balance) {
    let updatedBalance = 0;
    for(acc in Account) {
        if(Account[acc].accountNumber === beneficiaryAccountNumber) {
            updatedBalance = Account[acc].balance += balance;
        }
    }
    console.log("balance: " + updatedBalance);
    return updatedBalance;
}

debitAccount = function(senderAccountNumber, balance) {
    let updatedBalance = 0;
    for(acc in Account) {
        if(Account[acc].accountNumber === senderAccountNumber) {
            updatedBalance = Account[acc].balance -= balance
        }
    }
    console.log("balance: " + updatedBalance);
    return updatedBalance;
}

exports.getAppDetails = (request, response) => {
    response.status(200).send(`<h1>Welcome to money transfer API</h1>`);
} 
