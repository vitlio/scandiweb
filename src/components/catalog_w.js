import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Catalog from "./catalog";

const CATALOG_W = connect(mapStateToProps('Catalog'), mapDispatchToProps('Catalog'))(Catalog);

export default CATALOG_W;