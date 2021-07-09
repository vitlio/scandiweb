import { DEC_TOTAL_COUNT } from "../actions/DEC_TOTAL_COUNT";

export const decTotalCountAC = (value) => {
  return {
    type: DEC_TOTAL_COUNT,
    total: value,
  };
};
