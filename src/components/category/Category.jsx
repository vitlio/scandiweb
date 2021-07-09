import React from "react";
import "./category.css";
import ITEMLIST_W from "../itemlist/itemlist_w";

class Category extends React.PureComponent {
  render() {
    this.props.cartOpen
      ? document.body.classList.add("component-overflow")
      : document.body.classList.remove("component-overflow");

    return (
      <>
        {(document.location.pathname === "/" ||
          (this.props.match.params.categoryName &&
            this.props.match.params.categoryName.toLowerCase() !== "item" &&
            this.props.match.params.categoryName.toLowerCase() !== "cart")) && (
          <div className="wrap">
            <div className="categoryName">
              <h2>{this.props.match.params.categoryName}</h2>
            </div>
            <ITEMLIST_W />
          </div>
        )}
      </>
    );
  }
}

export default Category;
