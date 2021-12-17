const redux = require('redux')
const applyMiddleware = redux.applyMiddleware

const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()
//This allows us to only have to spread this array to add 
//more middleware quickly
const middleware = [logger] 

const store = redux.createStore(reducer, applyMiddleware(...middleware)) //spread middleware
//so all middleware in the array is given to the store