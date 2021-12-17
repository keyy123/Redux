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
            <h2 className="flex justify-center">Number of Cakes - {handleCake(props.numOfCake)}</h2><br/>
      <div className="flex justify-center">
            <button className="mb-5 bg-slate-500 border-2 rounded  border-slate-500" onClick={props.buyCake}>Buy Cake</button>
            </div>
            
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
