const URL="https://catfact.ninja/fact";
let promise= fetch(URL);
console.log(promise);

const factPara = document.querySelector("#fact");
const btn =document.querySelector("#btn");
// const getFacts = async()=>{
//     console.log("getting data...");
//     let response = await fetch (URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[1].text;
    
    
// };
// btn.addEventListener("click",getFacts);

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
        
    });
}
btn.addEventListener("click",getFacts);