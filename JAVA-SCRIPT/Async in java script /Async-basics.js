const changeName=function ()
{
    document.querySelector('h1').innerHTML="NIKHIL KUMAR SWARNKAR";


}
const changeMe=setTimeout(changeName,3000);
//setTimeout(changeName,3000);
document.querySelector('#stop').
addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("STOPPED");
    
})