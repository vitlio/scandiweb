import { SET_HEADER_MENU } from "../actions/SET_HEADER_MENU";

export const setHeaderMenuAC = (value) => {
  return {
    type: SET_HEADER_MENU,
    headerMenu: value,
  };
};
