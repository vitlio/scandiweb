import HeaderCart from "./headerCart";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { cartOpenAC } from "../../store/actionCreators/cartOpenAC";
import { removeFromCartAC } from "../../store/actionCreators/removeFromCartAC";
import { addTotalCountAC } from "../../store/actionCreators/addTotalCountAC";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";
import { addAttributeInCartAC } from "../../store/actionCreators/addAttributeInCartAC";
import { fillCartAC } from "../../store/actionCreators/fillCartAC";

function mapStateToProps() {
  return (state) => {
    return {
      goodsCount: state.goodsCount,
      cart: state.cart,
      total: state.total,
      currency: state.currency,
      currencyName: state.currencyName,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      amountTotal: (value) => dispatch(addTotalCountAC(value)),
      addThisItemToCart: (value) => dispatch(addToCartAC(value)),
      removeThisItemFromCart: (value) => dispatch(removeFromCartAC(value)),
      cartOpenClose: (value) => dispatch(cartOpenAC(value)),
      addAttributeInCart: (value, choosenSize) => dispatch(addAttributeInCartAC(value, choosenSize)),
      fillEntireCart: (value) => dispatch(fillCartAC(value)),
    };
  };
}

const HEADER_CART_W = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderCart)
);

export default HEADER_CART_W;
