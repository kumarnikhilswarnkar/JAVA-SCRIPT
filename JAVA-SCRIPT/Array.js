const arr=[20,21,22,23,24];
console.log(arr);
console.log(arr.at(1));
console.log(arr.at(3));



const heros=["shaktiman","Batman","spiderman"];
console.log(heros);

//**********Array methods************************

arr.push(27);
arr.push(30);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(31);
console.log(arr);
arr.shift();
console.log(arr);


//slice,splice

console.log("original array=", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log( "original array=",arr);


const myn2 = arr.splice(1, 3)
console.log( "original array=",arr);
console.log(myn2);

//slice can't include the last index
//splice manipulate the original array