import React from "react";
import { connect } from "react-redux";
import { buyToy } from "../redux";

const ToyContainer = ({ numOfToy, buyToy }) => {
  return (
    <div style={{ padding: 20 }}>
      <div>num of toy : {numOfToy}</div>
      <button onClick={() => buyToy()}>buy</button>
    </div>
  );
};

const toyMap = (state) => {
  console.log(state);
  return {
    numOfToy: state.toy.numOfToy,
  };
};

const toyDispatch = (dispatch) => {
  // console.log(dispatch);
  return {
    buyToy: () => dispatch(buyToy()),
  };
};

export default connect(toyMap, toyDispatch)(ToyContainer);
