import { connect } from "react-redux";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Category from "./Category";


const CATEGORY_W = connect(mapStateToProps('Category'), mapDispatchToProps('Category'))(Category);

export default CATEGORY_W;