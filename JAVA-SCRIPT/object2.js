//***************SINGLETON OBJECT**************************

const insta=new Object()
{
    insta.name="Nikhil kumar",
    insta.id="swarnakr_nikhilkumar",
    insta.isLoggedIn=false;
}
console.log(insta);
//nested Object 


const people = new Object({
    fullname: {
        username: {
            firstname: "Nikhil",
            middlename: "Kumar",
            lastname: "Swarnakr"
        }
    }
});

console.log(people.fullname.username);
console.log(people.fullname.username.firstname);

console.log(people.fullname.username.middlename);

console.log(people.fullname.username.lastname);



// COMBINING OBJECTS

const obj1={name:"NIKHIL",AGE:22};
const Obj2={LOCATION:"ARARIA",PHNO:9934708452};
const  obj3=Object.assign({},obj1,Obj2);
console.log(obj3);


