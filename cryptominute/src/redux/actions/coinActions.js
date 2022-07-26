import { ActionTypes } from "../constants/action-types";

export const setCoins = (coins) => {
  return {
    type: ActionTypes.SET_COIN,
    payload: coins,
  };
};

export const selectedCoin = (coin) => {
  return {
    type: ActionTypes.SELECTED_COIN,
    payload: coin,
  };
};
