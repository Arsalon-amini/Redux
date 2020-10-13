console.log("Hello World!");

function sayHello(){
    return "hello world"
}

//assign a fn as a variable 
let fn = sayHello; //not calling fn, passing reference
fn(); //alias for sayHello(), so we can call it just like sayHello(), same result

//pass a function as an arg to another fn (takes a fn as param, call fn inside)
function greet(fnMessage){
    console.log(fnMessage()); //calls fn 
}
greet(sayHello); //passing reference, not calling it

//return a function from a function 
function sayGoodbye(){
    return function(){
        return "goodbye world"; 
    }
}

let fn2 = sayGoodbye(); //returns a fn 
let message = fn2(); //call fn2, get message 