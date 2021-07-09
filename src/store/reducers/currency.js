import { initialState } from "../initialState";
import { CURRENT_CURRENCY } from "../actions/CURRENT_CURRENCY";

export const currency = (state = initialState.currency, action) => {
  switch (action.type) {
    case CURRENT_CURRENCY:
      switch (action.currency) {
        case "USD": {
          localStorage.setItem("currency", "$");
          return "$";
        }
        case "EUR": {
          localStorage.setItem("currency", "€");
          return "€";
        }
        case "JPY": {
          localStorage.setItem("currency", "¥");
          return "¥";
        }
        case "RUB": {
          localStorage.setItem("currency", "₽");
          return "₽";
        }
        case "AUD": {
          localStorage.setItem("currency", "$");
          return "$";
        }
        case "GBP": {
          localStorage.setItem("currency", "£");
          return "£";
        }

        default: {
          localStorage.setItem("currency", "$");
          return "$";
        }
      }

    default:
      return state;
  }
};
