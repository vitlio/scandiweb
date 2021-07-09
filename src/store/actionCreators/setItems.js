import { GET_ITEMS } from "../actions/GET_ITEMS";

export const setItems = (value) => {
  return {
    type: GET_ITEMS,
    items: value,
  };
};
