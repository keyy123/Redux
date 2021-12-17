//Type - a variable that is in upper SNAKE_CASE )=> space = _
//We make this variable so we don't have to worry about making spelling mistakes later
const BUY_WHOPPER = "BUY_WHOOPER"

//This is a best practice but is optional


//Action - JS Object that has a type key and a string value 
//Actions also tell redux how to update state 

{
    type: BUY_WHOPPER
}


//Action creator - A function that returns an action - action is an object with a type and string value

function buyWhopper(){
    return {
        type: BUY_WHOPPER
    }
}


