let myDate=new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023,2,24);
console.log(myCreatedDate); //not readable

console.log(myCreatedDate.toDateString());

let myDate2=new Date("2025-02-18");//YY/MM/DD
console.log(myDate2.toDateString());
let myDate3=new Date("11-29-2002");//MM/DD/YY
console.log(myDate3.toDateString());
