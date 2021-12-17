import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function Cake(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCake}</h2>
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
