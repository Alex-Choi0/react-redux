import { BUY_TOY } from "./toyTypes";

const initState = {
  numOfToy: 15,
};

export const toyReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_TOY:
      return {
        ...state,
        numOfToy: state.numOfToy - 1,
      };

    default:
      return state;
  }
};
