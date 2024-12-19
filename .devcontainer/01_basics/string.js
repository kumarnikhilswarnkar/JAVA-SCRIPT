//Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.
let name='Nikhil '
let fullname='kumar '
let surname='swarnkar'
console.log(name+fullname+surname);   //here we concat all string ...But it is not a modern way to concat
console.log(`My name is ${name}${fullname}${surname}`); //its a modern way 

// Let use some string functions there are many string function but we use only some of them, to know about more in string go through the MDN
let people="Nikhil   "
console.log(people.length)   //length of the string
console.log(people.toLowerCase())   
console.log(people.toUpperCase())   
console.log(people.trim())   // to ignore extra space
console.log(people.charAt(3)) 
console.log(people.indexOf('k'))     

let newname=name.substring(0,4)  //note here index 4 is not included
console.log(newname)   
let profile=name.slice(-5,3)   // from negative means from last
console.log(profile)   

