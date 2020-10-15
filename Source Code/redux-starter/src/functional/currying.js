function add(a){
    return function(b){
        return a + b; 
    }; 
}

add(1)(5); //takes input, adds +1 

//currying a function 
const add2 = a => b => a + b; //(a, b) => a + b 



