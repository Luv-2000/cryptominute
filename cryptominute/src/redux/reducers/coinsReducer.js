import { ActionTypes } from "../constants/action-types";

const initialState = {
  coins: [],
};

export const coinsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COIN:
      return { ...state, coins: payload };

    default:
      return state;
  }
};
