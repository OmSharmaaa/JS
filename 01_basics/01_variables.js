const accountId = 144553
let accountEmail = "omsf@gmail.com"
var accountPassword = "41547"
accountCity = "Jaipur"

//accountId=2 //not allowed
accountEmail="fds@gf.com"
accountPassword="786182"
accountCity="blr"
let accountState; // Undefined
console.log(accountId);
/*
....
preferred not to use var,
because of issues in block scope and functional scope
...
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
