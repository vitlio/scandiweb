import { GET_CURRENT_ITEM } from "../actions/GET_CURRENT_ITEM";

export const setCurrentItem = (value) => {
  return {
    type: GET_CURRENT_ITEM,
    currentItem: value,
  };
};
