 const message=()=>
{
    console.log("Normal Arrow function syntax");
}
message();

const sum=(num1,num2)=>
{
    let sum1=num1+num2;
    console.log("sum is =",sum1);
    
}
sum(2,4);

const mul=(num1,num2)=>
{
   return num1*num2;                                 //explicite return 
}
console.log("Multiplication of these number is =",mul(6,2));

const sub=(num1,num2)=>num1-num2             //implicite return 
console.log("subtraction is =",sub(10,8));

