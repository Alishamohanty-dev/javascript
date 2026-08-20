// let score = "33 abc" //NaN=> not a number 

//let score = null

//let score = undefined 

let score = true 
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0;
//1 => true; 0 => false;
//"" => false
//"alisha" => true

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);

console.log( typeof stringNumber);

// ******************* OPERATIONS ******************  //

let value = 3
let negValue = -value
console.log(negValue);

/* console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2/3);
console.log(2%3);
console.log(2**3);  */ // ** makes power 

let str1 = "Hello"
let str2 = " Alisha"

 let str3 = str1 + str2
 console.log(str3);

 console.log("1" + 2);
 console.log(1 + "2");

 console.log("1" + "2" + 2);
 console.log(1 + 2 + "2");   // go through ECMA SCRIPT 7.1.1 ToPrimitive
 
// console.log(1 + 2 * 3 % 5); //don't mess up code like this 

console.log(true); 
/*
console.log(+true);     => don't mess code like this way 
console.log(true+);
console.log(+ ""); 
 */

let num1, num2, num3 
num1 = num2 = num3 = 2+2  //don't do these tricky behaviours 

let gamecounter = 100
gamecounter ++;  // ++gamecounter ;  
                // prefer to prefix postfix mdn

console.log(gamecounter);


// link to study =>
// https://tc39.es/ecma262/#sec-type-conversion

