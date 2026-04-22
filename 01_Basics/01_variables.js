const accountId = 14453
let accountEmail = "chinmay@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

// accountId = 2 //not allowed
accountEmail = "cncn@gmail.com"
accountPassword = "121212"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountId);


