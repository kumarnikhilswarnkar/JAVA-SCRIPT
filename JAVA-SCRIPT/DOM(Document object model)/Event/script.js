let btn1=document.querySelector("#btn");
btn1.onclick=(event)=>
{
    console.log("Button was clicked");
    const a=10;
    const b=14;
    const sum = a + b;
    console.log(`The sum of A which is ${a} and B which is ${b} = ${sum}`);
    console.log(`Event type:${event.type}`);
    console.log(`Event timeStamp:${event.timeStamp}`);//Time when an event occurred and is stored in the metadata.
    console.log(`Event defaultPrevented:${event.defaultPrevented}`);//returns a boolean value indicating whether or not the call to Event.
    console.log(`Event clientX:${event.clientX}`);//The clientX and clientY are read-only properties 
    console.log(`Event clientY:${event.clientY}`);//that provide the horizontal and vertical coordinates respectively within the content area, or the viewport
    //  of the browser window
    console.log(`Event screenX:${event.screenX}`);
    console.log(`Event screenY:${event.screenY}`);
};