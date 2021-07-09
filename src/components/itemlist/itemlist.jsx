import React from "react";
import { NavLink } from "react-router-dom";
import ITEM_W from "../item/item_w";
import './itemlist.css'

class Itemlist extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
    };
  }
  componentDidMount() {
    let url =
      "http://localhost:4000?query={category{products{category,gallery,inStock,name,description,attributes{id,name,type,items{displayValue,value,id}} prices{currency,amount}}}}";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allItems: data.data.category.products });
      });
  }
  render() {
    return (
      <div className="itemlist">
        {document.location.pathname === "/" &&
          this.state.allItems.map((i, idx) => (
            <div key={idx} className="item-container-cell">
              <NavLink to={"/item/" + i.name}>
                <ITEM_W
                  item={i}
                  currency={this.props.currency}
                  onClick={() => this.props.itemDispatch(i)}
                />
              </NavLink>
            </div>
          ))}
        {this.props.match.params.categoryName &&
          this.state.allItems
            .filter(
              (i) =>
                i.category.toLowerCase() ===
                this.props.match.params.categoryName
            )
            .map((i, idx) => (
              <div key={idx} className="item-container-cell">
                <NavLink to={"/item/" + i.name}>
                  <ITEM_W
                    item={i}
                    currency={this.props.currency}
                    onClick={() => this.props.itemDispatch(i)}
                  />
                </NavLink>
              </div>
            ))}
      </div>
    );
  }
}

export default Itemlist;
