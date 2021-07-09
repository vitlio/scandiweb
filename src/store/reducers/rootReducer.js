import { currentPage } from "./currentPage";
import { currencyArrow } from "./currencyArrow";
import { currency } from "./currency";
import { currencyName } from "./currencyName";
import { cartOpen } from "./cartOpen";
import { items } from "./items";
import { category } from "./category";
import { currentItem } from "./currentItem";
import { cart } from "./cart";
import { goodsCount } from "./goodsCount";
import { total } from "./total";
import { headerMenu } from "./headerMenu";
import { combineReducers } from "redux";

export let reducers = combineReducers({
  currentPage,
  currencyArrow,
  currency,
  currencyName,
  cartOpen,
  items,
  category,
  currentItem,
  cart,
  goodsCount,
  total,
  headerMenu,
});
