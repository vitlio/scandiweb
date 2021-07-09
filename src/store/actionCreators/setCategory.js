import { GET_CATEGORY } from "../actions/GET_CATEGORY";

export const setCategory = (value) => {
  return {
    type: GET_CATEGORY,
    category: value,
  };
};
