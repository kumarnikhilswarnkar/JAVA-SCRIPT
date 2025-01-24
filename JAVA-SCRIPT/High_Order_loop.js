// FOR OF LOOP//
const arr=[11,12,13,14,15,16,17,18,19,20];
for (const num of arr)
    {
       // console.log(num);    
    } 
    const greetings="hello Nikhil!";
    for (const greet of greetings) {
        //console.log(`Each character ${greet}`);
    }
    
    //MAP Which is known as unique value entity .
    const map=new Map();
    map.set('IN',"INDIA");
    map.set('US',"United state of America");
    map.set('Fr',"France");
    map.set('IN',"INDIA");//not executed due to same entity 

   // console.log(map);
    for (const maps of map) {
       // console.log(maps);
        
    }

    //for accessing object through FOR of Loop not possible we'll use FOR in Loop for acccesing Object

    /*const language=
    {
       c:'C language',
       cpp:'c++',
       js:'java script',
       css:'castcading style sheet'
    }*/
   
   /* for (const key in language) {
      // console.log(`${key} used for ${language[key]}`);
       
    }
    for (const key of language) {
       // console.log(key); its not iterable by using for of loop
    }*/
    
//FOR EACH LOOP
const name=["nikhil","priyam","krish","rahul"]
name.forEach(function(names) {
    console.log(names);
    console.log(names);
    
});