import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Category from "./Category";
import { setCategory } from "../../store/actionCreators/setCategory";

function mapStateToProps() {
  return (state) => {
    return {
      category: state.category,
      cartOpen: state.cartOpen,
      headerMenu: state.headerMenu,
    };
  };
}
function mapDispatchToProps() {
  return (dispatch) => {
    return {
      currentPageDispatch: (e) => dispatch(setCategory(e)),
    };
  };
}

let CategoryWithRouter = withRouter(Category);
const CATEGORY_W = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryWithRouter);

export default CATEGORY_W;
