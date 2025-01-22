function myname()   //function defination
{
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
myname();//calling function 

function sum(num1,num2)
{
    console.log("SUM OF THESE NUMBER IS:= ",num1+num2);
    
}
 let result=sum(6,4);
console.log(result);         //its shows result is undefined 


function sum(num1,num2)      //the variable num1 and num2 inside parentheses called "parentheses "
{
    console.log("SUM OF THESE NUMBER IS:= ",num1+num2);
    return(num1+num2);
}
 let result2=sum(6,4);  //Values are under parentheses  called "argument"
console.log(result2); 


function loginUserMessage(username)
{
    if(!username)
    {
        console.log("please enter your username:-");
        return;
        
    }
    return `${username } is just loged in`;
}
console.log(loginUserMessage ("Nikhil"));



function cartValue(...num1)
{
    
 return num1;
}
console.log("values in a cart is:",cartValue(200,400,600,1000));


function cartValueSum(...num1) {
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        sum += num1[i];
    }
    return sum;  // Return the sum from the function
}

console.log("Values in a cart is:", cartValueSum(200, 400, 600, 1000));  // This prints the sum

//******************accessing object in funmction */

const user=
{
    username:"nikhil",
    age:22
};

function accessUser(anyuser)
{
    console.log(`username is ${anyuser.username} and age is ${anyuser.age}`);
    
}
accessUser(user);
