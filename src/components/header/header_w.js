import { connect } from "react-redux";
import Header from "./header";
import { currencyArrowAC } from "../../store/actionCreators/currencyArrowAC";
import { setCategory } from "../../store/actionCreators/setCategory";
import { cartOpenAC } from "../../store/actionCreators/cartOpenAC";
import { addTotalCountAC } from "../../store/actionCreators/addTotalCountAC";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";

function mapStateToProps() {
  return (state) => {
    return {
      currency: state.currency,
      currencyArrow: state.currencyArrow,
      currencyName: state.currencyName,
      cartOpen: state.cartOpen,
      cart: state.cart,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      currencyArrowOpen: () => dispatch(currencyArrowAC()),
      currentPageDispatch: (e) => dispatch(setCategory(e)),
      cartOpenClose: () => dispatch(cartOpenAC()),
      amountTotal: (value) => dispatch(addTotalCountAC(value)),
      addThisItemToCart: (value) => dispatch(addToCartAC(value)),
    };
  };
}

const HEADER_W = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HEADER_W;
