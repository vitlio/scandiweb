import { initialState } from "../initialState";
import { CURRENCY_ARROW } from "../actions/CURRENCY_ARROW";

export const currencyArrow = (state = initialState.currencyArrow, action) => {
  switch (action.type) {
    case CURRENCY_ARROW:
      return !state;
    default:
      return state;
  }
};
