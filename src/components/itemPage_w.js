import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import ItemPage from "./itemPage";

const ITEM_PAGE_W = connect(mapStateToProps('ItemPage'), mapDispatchToProps('ItemPage'))(ItemPage);

export default ITEM_PAGE_W;