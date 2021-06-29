import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Item from "./item";

const ITEM_W = connect(mapStateToProps('Item'), mapDispatchToProps('Item'))(Item);

export default ITEM_W;