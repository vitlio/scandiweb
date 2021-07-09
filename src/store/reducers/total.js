import { initialState } from "../initialState";
import { ADD_TOTAL_COUNT } from "../actions/ADD_TOTAL_COUNT";
import { DEC_TOTAL_COUNT } from "../actions/DEC_TOTAL_COUNT";

export const total = (state = initialState.total, action) => {
  switch (action.type) {
    case ADD_TOTAL_COUNT: {
      localStorage.setItem("total", action.total);
      return action.total;
    }
    case DEC_TOTAL_COUNT: {
      localStorage.setItem(
        "total",
        state >= action.total && state - action.total
      );
      return state >= action.total && state - action.total;
    }
    default:
      return state;
  }
};
