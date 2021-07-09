import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Itemlist from "./itemlist";
import { addToCartAC } from "../../store/actionCreators/addToCartAC";
import { setCurrentItem } from "../../store/actionCreators/setCurrentItem";

function mapStateToProps() {
  return (state) => {
    return {
      items: state.items,
      currency: state.currency,
      category: state.category,
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

let ItemListWithRouter = withRouter(Itemlist);
const ITEMLIST_W = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListWithRouter);

export default ITEMLIST_W;
