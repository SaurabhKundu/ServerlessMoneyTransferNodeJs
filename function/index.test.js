const res = require('express/lib/response');
const index = require('./index')

test('Runs function handler', async () => {
    let event = {
        "beneficiaryAccountNumber": "acc1",
        "senderAccountNumber": "acc2",
        "accountType": "SAVINGS",
        "balance": 100
    }
    let response = await index.handler(event, null)
    console.log(response.creditBalance);
    expect(JSON.stringify(response)).toContain('debitBalance');
    expect(response.debitBalance).toBe(900);
    expect(response.creditBalance).toBe(600);
  }
)