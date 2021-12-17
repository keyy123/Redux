const redux = require('redux')
const createStore = redux.createStore


const store = createStore(reducer) 
console.log('intialState', store.getState())
const unsub = store.subscribe(()=>{console.log('updated state', store.getState())})
store.dispatch(buyWhopper())
store.dispatch(buyWhopper())
unsub()
