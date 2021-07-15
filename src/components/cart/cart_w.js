import { connect } from "react-redux";
import Cart from "./cart";
import { removeFromCartAC } from "../../store/actionCreators/removeFromCartAC";
import { addTotalCountAC } from "../../store/actionCreators/addTotalCountAC";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";
import { addAttributeInCartAC } from "../../store/actionCreators/addAttributeInCartAC";

function mapStateToProps() {
  return (state) => {
    return {
      cart: state.cart,
      currency: state.currency,
      currencyName: state.currencyName,
      total: state.total,
      cartOpen: state.cartOpen,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      addThisItemToCart: (value) => dispatch(addToCartAC(value)),
      removeThisItemFromCart: (value) => dispatch(removeFromCartAC(value)),
      addAttributeInCart: (value, choosenSize) =>
        dispatch(addAttributeInCartAC(value, choosenSize)),
      amountTotal: (value) => dispatch(addTotalCountAC(value)),
    };
  };
}

const CART_W = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CART_W;
