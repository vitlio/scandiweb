import { initialState } from "../initialState";
import { GET_CATEGORY } from "../actions/GET_CATEGORY";

export const category = (state = initialState.category, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      action.category = Array.from(action.category)
        .map((i, idx) => (idx === 0 ? i.toUpperCase() : i.toLowerCase()))
        .join("");
      return action.category;
    default:
      return state;
  }
};
