import React from 'react'
import { buyCake } from '../redux/cake/cakeAction'
import {connect} from 'react-redux'

const soldOut = "Sorry, sold out!"

const handleCake = (num) =>{
  if(num <= 0) {
    return soldOut
  }else{
    return `Hurry, We've only got ${num} more cakes left`
}
}

function Cake(props) {
    return (
        <div>
            <h2>Number of Cakes - {handleCake(props.numOfCake)}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const MapStateToProps = state => {
    return {
      numOfCake: state.numOfCake
    }
  }
  
  const MapDispatchToProps = dispatch => {
    return{
      buyCake: () => dispatch(buyCake())
    }
  }
  
export default connect(MapStateToProps, MapDispatchToProps)(Cake)
