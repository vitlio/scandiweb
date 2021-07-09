import { connect } from "react-redux";
import Catalog from "./catalog";
import { setHeaderMenuAC } from "../../store/actionCreators/setHeaderMenuAC";

function mapDispatchToProps() {
  return (dispatch) => {
    return {
      setHeaderMenu: (value) => dispatch(setHeaderMenuAC(value)),
    };
  };
}

const CATALOG_W = connect(null, mapDispatchToProps)(Catalog);

export default CATALOG_W;
