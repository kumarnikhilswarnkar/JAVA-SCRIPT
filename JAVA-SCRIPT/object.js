//object created by Object literals where "Singleton" is absent 
//when we create Object using "Object.create" then we observe "Singleton".

//****************************object Literals***************************** */
//SYMBOLS IN JAVA SCRIPT UNMDERSTAND HOW TO ACCESS SYMBOLS USING OBJECT 

const mysym = Symbol("hii nikhil");

const obj={
    name:"Nikhil",
    "full name":"Nikhil kumar swarnakar",
    [mysym]:mysym,
    age:22,
    email:"nikhilkumar55256@gmail.com",
    location:"Aaraia"

};

//access

console.log(obj.name);
//console.log(obj.full name );// when we access our string using dot(.) opeartor its shows error then we use 
console.log(obj["full name"]);//this method to access string
console.log(obj["age"]);
console.log(obj[mysym]);//acccessing symbol 
console.log(typeof obj[mysym]);//its return type is SYMBOL 

//FUNCTION IN OBJECT 
obj.greeting = function() {
    console.log("hello everyone");
};

console.log(obj.greeting());

obj.reference=function()   // Accessing object elements
{
    console.log(`hello ,${this.name}`);
    
};
console.log(obj.reference());

