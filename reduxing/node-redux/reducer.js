//A reducer is a function that takes in state and an action to actually update/change state

//S1.) Make a initial state aka a single source of truth

const initialState = {
    numOfWhopper: 5
}

//S2.) Make a reducer function - It is a funciton that takes in state and action as parameters 
//and switch between action types to decide how to update state

//switch has a parameter called action type which mostly likely refers to the action creator in action .js
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_WHOPPER:return{
            ...state, //copy current state - if there other values they would not be affected
            numOfWhopper: state.numOfWhopper - 1
        }   
        default:
        return state    
    }
}

