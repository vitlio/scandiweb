import { initialState } from "../initialState";
import { SET_HEADER_MENU } from "../actions/SET_HEADER_MENU";

export const headerMenu = (state = initialState.headerMenu, action) => {
  switch (action.type) {
    case SET_HEADER_MENU:
      return action.headerMenu[0];
    default:
      return state;
  }
};
