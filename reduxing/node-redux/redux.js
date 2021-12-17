
const redux = require('redux')

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const middleware = [logger]
const createStore = redux.createStore


const combineReducer = redux.combineReducers



const BUY_WHOPPER = "BUY_WHOOPER"
const BUY_ICECREAM = "BUY_ICECREAM"
function buyWhopper(){
    return {
        type: BUY_WHOPPER
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

function whooperReducer(state = initialBurgerState, action){
switch (action.type) {
    case BUY_WHOPPER:return{
        ...state, 
        numOfWhooper:state.numOfWhooper - 1
    }
    default:
        return state
}
}

function iceCreamReducer(state = initialIceCreamState, action){
switch(action.type){
    case BUY_ICECREAM:return{
        ...state,
        numOfIceCream: state.numOfIceCream - 1
    }
    default:
        return state
}
}

const initialBurgerState = {
    numOfWhooper: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const rootReducer = combineReducer({
    burger: whooperReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(...middleware))



console.log('start state', store.getState())
const unsub = store.subscribe(()=>{})
store.dispatch(buyWhopper())
store.dispatch(buyWhopper())
store.dispatch(buyWhopper())
store.dispatch(buyWhopper())
store.dispatch(buyWhopper())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsub()