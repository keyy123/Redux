import { BUY_CAKE } from "./cakeTypes";

const initialState ={
    numOfCake:10
}

export default function cakeReducer(state=initialState, action){
switch (action.type) {
    case BUY_CAKE:return{
        ...state, numOfCake: state.numOfCake - 1
    }
    default:
        return state
}
}