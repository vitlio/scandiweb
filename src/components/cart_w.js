import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Cart from "./cart";


const CART_W = connect(mapStateToProps('Cart'), mapDispatchToProps('Cart'))(Cart);

export default CART_W;