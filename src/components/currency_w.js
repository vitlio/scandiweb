import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Currency from "./currency";

const CURRENCY_W = connect(mapStateToProps('Currency'), mapDispatchToProps('Currency'))(Currency);

export default CURRENCY_W;