import React from "react";
import CartStorage from "../cartStorage/cartStorage";
import "./item.css";

class Item extends React.PureComponent {
  createThisItem() {
    return {
      ...this.props.item,
      choosenSize: this.props.item.attributes.map((att) => [
        att.name,
        att.items[0].value,
      ]),
      countInCart: 1,
    };
  }

  render() {
    let price = this.props.item.prices.filter(
      (i) => i.currency === this.props.currencyName
    );
    return (
      <>
        {this.props.item.inStock ? (
          <div
            className="item-container"
            onClick={(e) =>
              e.target.closest(".item-container") &&
              this.props.itemDispatch(this.props.item)
            }
          >
            <div
              className="item-cartButton"
              onClick={() =>
                CartStorage.addToLocalStorageCart(this.createThisItem())
              }
            >
              <img
                src="http://localhost:3000/images/empty-cart-white.svg"
                alt="empty cart"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.addThisItemToCart(this.createThisItem());
                }}
              />
            </div>
            <div className="item-content">
              <div className="item-content__image">
                <img
                  src={this.props.item.gallery[0]}
                  alt={this.props.item.name}
                />
              </div>
              <div className="item-description">
                <div className="item-title">{this.props.item.name}</div>
                <div className="item-price">
                  {this.props.currency}
                  {price[0].amount}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="item-container"
            onClick={(e) =>
              e.target.closest(".item-container") &&
              this.props.itemDispatch(this.props.item)
            }
          >
            <div className="item-content">
              <div className="item-content__image">
                <img
                  src={this.props.item.gallery[0]}
                  alt={this.props.item.name}
                />
              </div>
              <div className="item-content-available-layout">
                <div className="item-content-available">OUT OF STOCK</div>
              </div>
              <div className="item-description">
                <div className="item-title">{this.props.item.name}</div>
                <div className="item-price">
                  {this.props.currency}
                  {price[0].amount}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Item;
