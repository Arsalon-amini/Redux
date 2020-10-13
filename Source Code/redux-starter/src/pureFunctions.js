var minAge; 

//impure fn -> Math.random() generates undeterministic value each time
function myFunction(number){
    return number * Math.random(); 
}

//pure fn -> returns same value everytime it's called 
function myFunction(number){
    return number * 2; 
}

//impure fn 
function isEligable(age){
    return age > minAge; 
}

//pure fn (everything fn needs is clearly documented)
function isEligable2(age, minAge){
    return age > minAge
}



