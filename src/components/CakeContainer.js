import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCake}</h2>
      <button onClick = {() => props.buyCake()}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCake: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => {
      return dispatch(buyCake())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
