import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Item from "./item";
import { setCurrentItem } from "../../store/actionCreators/setCurrentItem";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";

function mapStateToProps() {
  return (state) => {
    return {
      currentItem: state.currentItem,
      currency: state.currency,
      currencyName: state.currencyName,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      itemDispatch: (value) => dispatch(setCurrentItem(value)),
      addThisItemToCart: (value) => dispatch(addToCartAC(value)),
    };
  };
}

const ITEM_W = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Item)
);

export default ITEM_W;
