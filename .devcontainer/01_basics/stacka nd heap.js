/*All the primitive datatype are store in a Stack 
and All the non-primitive data type are stored in a heap memory*/
// memory are two type mainly 
/*stack and heap
NOTE:-in stack we get a copy of the variable not the actual variable
and in heap we get the actual reference */
/* So if we changes in stack that's not make changes in its actual data its change in its copy 
and in heap the actual data Changed*/

//example stack
let name="nikhil"
let anothername=name
 anothername="babu"
 console.log(name)
 console.log(anothername)

 // example heap
 let profile=
 {
    name:"nikhil"
 };
 let newprofile=profile
 newprofile.name="babu"
 console.log(profile.name)
 console.log(newprofile.name)
 
