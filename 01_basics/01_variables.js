const accountId=155467
let accountEmail="test@gmail.com"
var accountPassword="12345"
accountcity ="Jaipur"
// accountId = 2// not allowed
accountEmail="test_1@gmail.com"
accountPassword="987456"
accountcity="patna"
let accountState;
/*
Prefer not to use Var because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])