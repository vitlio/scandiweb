import React from "react";
import "./category.css";
import ITEMLIST_W from "../itemlist/itemlist_w";

class Category extends React.PureComponent {
  render() {
    let { categoryName } = this.props.match.params;
    this.props.cartOpen
      ? document.body.classList.add("component-overflow")
      : document.body.classList.remove("component-overflow");
    return (
      <>
        {(document.location.pathname === "/" ||
          (categoryName &&
            categoryName.toLowerCase() !== "item" &&
            categoryName.toLowerCase() !== "cart")) && (
          <div className="wrap">
            <div className="categoryName">
              <h2>{categoryName}</h2>
            </div>
            <ITEMLIST_W />
          </div>
        )}
      </>
    );
  }
}

export default Category;
