import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Header from "./header";

const HEADER_W = connect(mapStateToProps('Header'), mapDispatchToProps('Header'))(Header);

export default HEADER_W;