const accountId = 450405   //const cannot be changed 
let accountEmail = "alisha@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState; // undefined because value not defined 
//accountId = 2 //not allowed

accountEmail = "am@am.com"
accountPassword = " 98760"
accountCity = "Odisha"

console.log(accountId);

/*
Prefer not to use var because of issue in 
block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])