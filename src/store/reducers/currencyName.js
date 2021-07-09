import { initialState } from "../initialState";
import { CURRENT_CURRENCY_NAME } from "../actions/CURRENT_CURRENCY_NAME";

export const currencyName = (state = initialState.currencyName, action) => {
  switch (action.type) {
    case CURRENT_CURRENCY_NAME: {
      localStorage.setItem("currencyName", action.currency);
      return action.currency;
    }
    default:
      return state;
  }
};
