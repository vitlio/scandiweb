import { CURRENT_CURRENCY_NAME } from "../actions/CURRENT_CURRENCY_NAME";

export const currentCurrencyNameAC = (value) => {
  return {
    type: CURRENT_CURRENCY_NAME,
    currency: value,
  };
};
