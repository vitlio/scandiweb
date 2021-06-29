import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import HeaderCart from "./headerCart";

const HEADER_CART_W = connect(mapStateToProps('HeaderCart'), mapDispatchToProps('HeaderCart'))(HeaderCart)

export default HEADER_CART_W;