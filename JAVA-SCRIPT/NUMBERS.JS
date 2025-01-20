//**************************NUMBERS IN JAVA-SCRIPT****************************

const  score=100;
console.log(score);
console.log(typeof(score));

const score2=new Number(100);
console.log(score2);
console.log(typeof(score2));

//when you deal with E-commerce website you use a method called "toFixed()" to deal with your customer.
 const price=299;
 console.log("price of a product =",price.toFixed(2));

 //when we want to see our values in a precise format then we use a method called "toPrecision".

 let value=120.8966;
 console.log("Pricison value of this value is =",value . toPrecision(3));
 console.log("Pricison value of this value is =",value . toPrecision(4));


 //toLocaleString()//
 let num=10000000;//  yhaaa crore value easily readable nhi hai to make it readable we use method called toLocaleStRING()";

 console.log("Value in US standard form=",num.toLocaleString());
 console.log("Value in INDIAN standard form=",num.toLocaleString('en-IN'));