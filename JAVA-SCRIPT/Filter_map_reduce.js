const arr=["nikhil","kumar","swarnkar"];
const value=arr.forEach((item)=>
{
  //  console.log(arr);
   // console.log(item);
  //*  //console.log(value);// for each does not return any value 
    
})

//FITER

const mynum=[1,2,3,4,5,6,7,8,9,10]
const num=mynum.filter((item) =>item >4)
//console.log(num);


const item=[1,2,3,4,5,6,7,8,9,10]
const mynum2=item.filter((num) =>
    {
      return  num >4})     //when we use curly braces then return type must be important 
//console.log(mynum2);


const book = [
    { title: 'book one', edition: 2013, publish: 2002, type: 'Science' },
    { title: 'book two', edition: 2014, publish: 2003, type: 'history' },
    { title: 'book three', edition: 2024, publish: 2002, type: 'politics' },
    { title: 'book four', edition: 2013, publish: 2014, type: 'Science' },
    { title: 'book five', edition: 2013, publish: 2002, type: 'history' }
];

// Make sure to filter based on exact match (case-sensitive)
const userbooks = book.filter((bk) => bk.type === 'history');

//console.log(userbooks);


//MAP
const values=[1,2,3,4,5,6,7,8,9,10]
const newvalue=values
.map((nums)=>nums*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newvalue);

//REDUCE METHOD

const val=[1,2,3];
const myval=val.reduce(function(acc,currval)
{
    console.log(`acc is:${acc} and current value is:${currval}`);
    
    return acc+currval
},0);

console.log(`total sum is:${myval}`);

