import { initialState } from "../initialState";
import { CURRENT_PAGE } from "../actions/CURRENT_PAGE";

export const currentPage = (state = initialState.currentPage, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.currentPage;
    default:
      return state;
  }
};
