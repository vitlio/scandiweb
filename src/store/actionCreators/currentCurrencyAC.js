import { CURRENT_CURRENCY } from "../actions/CURRENT_CURRENCY";

export const currentCurrencyAC = (value) => {
  return {
    type: CURRENT_CURRENCY,
    currency: value,
  };
};
