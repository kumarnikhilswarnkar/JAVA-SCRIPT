const accountId = 144553
let accountEmail = "nikhil@google.com"
var accountPassword = "12345"
accountCity = "Araria"
let accountState;

// accountId = 2 // not allowed


accountEmail = "nikhil@.com"
accountPassword = "21212121"
accountCity = "Araria"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])