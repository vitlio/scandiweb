import { CURRENT_PAGE } from "../actions/CURRENT_PAGE";

export const currentPageAC = (value) => {
  return {
    type: CURRENT_PAGE,
    currentPage: value,
  };
};
