import { initialState } from "../initialState";
import { ADD_GOODS_COUNT } from "../actions/ADD_GOODS_COUNT";
import { DEC_GOODS_COUNT } from "../actions/DEC_GOODS_COUNT";

export const goodsCount = (state = initialState.goodsCount, action) => {
  switch (action.type) {
    case ADD_GOODS_COUNT: {
      localStorage.setItem("goodsCount", ++state);
      return ++state;
    }
    case DEC_GOODS_COUNT: {
      localStorage.setItem("goodsCount", state > 0 && --state);
      return state > 0 && --state;
    }
    default:
      return state;
  }
};
