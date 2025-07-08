// setInterval() => {

// }
// function sayHello() {
//   console.log("Hello!");
// }

// setInterval(sayHello, 1000);


let timer =15;

 let intervalID= setInterval(()=>{
   
    timer--;
    if (timer===0) {
        console.log("finished");
        clearInterval(intervalID)
    } else {
        console.log("mohit");
        
    }
},1000)