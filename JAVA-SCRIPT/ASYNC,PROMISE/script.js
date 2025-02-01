//let promise=new Promise((resolve,reject)=>
//{
//console.log("HII your promise is created now");
//resolve("status sucessfull")
//rejected("status problem occur")

//})

//function getData(dataId,getNextData){
//return new Promise((resolve,reject)=>{
    //setTimeout(() => {
       // console.log("data",dataId);
       // if(getNextData){
       //     getNextData();
        //}
   // }, 6000);
//}
//);
//}


//use of Promise.then and promise.catch
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
       console.log("I am a promise");
       //resolve("success");
       reject("not executedd");
       
   });
};
let promise=getPromise();
promise.then(()=>{
   console.log("promise fulfilled");
   
});
promise.catch(()=>{
   console.log("rejected promise");
   
})