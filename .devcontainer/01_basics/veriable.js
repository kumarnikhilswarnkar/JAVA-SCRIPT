const id=12345 // if we declare a variable with const that can't be change after 
let name='Nikhil'//Variables declared by let are only available inside the block where they're defined
var accountId='22082'//you have created a global variable
city='Bihar'//It's possible that you declare a variable in JavaScript without using any keyword 

console.log(id)
console.log(name)
console.log(accountId)
console.log(city)

//if you want to print ypur define data in a tabular form then we use (Console.table)
console.table([id,name,accountId,city])
