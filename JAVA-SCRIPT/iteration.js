/*first we'll learn about operators which we use.
(<,>)less than and greater than
(<=,>=)less than equal to and greater than equal to 
(!=)not equal to 
(==)is equal to 
(===)when we want to check data type and variable value both  */

for(let i=0;i<=10;i++)
{
    console.log(i);
    
}
for(let  i=0;i<5;i++)
{
    console.log("NIKHIL");
    
}

//nested loop
for(let i=2;i<=10;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i+'*'+j+'='+i*j)          //Table for 2 to 10
    }
}

console.log("    ");
const arr=["NIKHIL","KUMAR","SWARNAKR"];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}


for (let i = 0; i <=20; i++) {
    if(i==5)
    {
        console.log(" detected now");
        break
        
    }
    console.log(`number is :${i}`);
    
    
}
for (let i = 0; i <=20; i++) {
    if(i==5)
    {
        console.log(" detected now");
        continue
        
    }
    console.log(`number is :${i}`);
    
    
}
