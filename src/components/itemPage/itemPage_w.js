import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ItemPage from "./itemPage";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";
import { setCurrentItem } from "../../store/actionCreators/setCurrentItem";

function mapStateToProps() {
  return (state) => {
    return {
      currentItem: state.currentItem,
      currency: state.currency,
      cart: state.cart,
      cartOpen: state.cartOpen,
      currencyName: state.currencyName,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      addThisItemToCart: (value) => dispatch(addToCartAC(value)),
      itemDispatch: (value) => dispatch(setCurrentItem(value)),
    };
  };
}

let ItemPageWithRouter = withRouter(ItemPage);
const ITEM_PAGE_W = connect(mapStateToProps,mapDispatchToProps)(ItemPageWithRouter);

export default ITEM_PAGE_W;
