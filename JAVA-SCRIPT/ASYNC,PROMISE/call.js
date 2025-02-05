function sum(a,b){
    console.log(a+b);
    
}
 function calculate(a,b, sumCallback){
    sumCallback(a,b);
 }
 calculate(5,10,sum);
 calculate(5,10,(a,b)=>{
    console.log("through arrow function");
    
    console.log(a+b);
    
 })