import { ADD_TOTAL_COUNT } from "../actions/ADD_TOTAL_COUNT";

export const addTotalCountAC = (value) => {
  return {
    type: ADD_TOTAL_COUNT,
    total: value,
  };
};
