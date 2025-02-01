// async function hello(){
//    console.log("hello nikhil");
    
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Weather data");
//         resolve(200);
//        },6000);
//     });
// }

//  async function getWeatherData() {
//     await api();//1st
//     await api();//2nd
//  }

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            
        }, 2000);
    });
}
async  function getAllData(){
    await getData(1);
    console.log("first complete");
    
    await getData(2);
    console.log("second complete");
    
    await getData(3);
    console.log("all compete");
    
}