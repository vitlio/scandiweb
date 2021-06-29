import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Itemlist from "./itemlist";

const ITEMLIST_W = connect(mapStateToProps('Itemlist'), mapDispatchToProps('Itemlist'))(Itemlist);

export default ITEMLIST_W;