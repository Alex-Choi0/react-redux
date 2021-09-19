import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  console.log(props);

  return (
    <div style={{ padding: 50 }}>
      <div>num of iceCream - {props.numOfIceCreams}</div>
      <button onClick={props.buyIceCream}>buy</button>
    </div>
  );
};

const iceCreamMap = (state) => {
  console.log(state.iceCream.numOfIceCreams);
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const iceCreamDispatch = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(iceCreamMap, iceCreamDispatch)(IceCreamContainer);
