import React from "react";
import { NavLink } from "react-router-dom";
import CartStorage from "../cartStorage/cartStorage";
import "./headerCart.css";

class HeaderCart extends React.PureComponent {
  render() {

    let total = this.props.cart
      .map(
        (i) =>
          i.prices.filter((i) => i.currency === this.props.currencyName)[0]
            .amount * i.countInCart
      )
      .reduce((sum, current) => {
        return sum + current;
      }, 0)
      .toFixed(2);
    this.props.amountTotal(total);
    return (
      <div className="headerCart">
        <div className="headerCart-title">
          <div className="headerCart-title__myBag">
            My Bag,&nbsp;
            <span className="headerCart-title__items">
              {this.props.cart&&this.props.cart.length} items
            </span>
          </div>
        </div>
        <div className="headerCart-items">
          {this.props.cart.map((i, idx) => {
            let myatt = idx;
            return (
              <div key={idx} className="headerCart-itemCard">
                <div className="headerCart-itemCard__description">
                    <NavLink to={"/item/" + i.name}>
                      <div className="headerCart-itemCard__title">{i.name}</div>
                    </NavLink>
                  <div className="headerCart-itemCard__price">
                    {this.props.currency}
                    {
                      i.prices.filter(
                        (cur) => cur.currency === this.props.currencyName
                      )[0].amount
                    }
                  </div>
                  <div className="headerCart-itemCard__sizes">
                    {i.attributes &&
                      i.attributes.map((att, idx) => {
                        return (
                          <div key={idx} className="headerCart-itemCard__att">
                            <div className="headerCart-itemCard-att-title">
                              {att.name}:
                            </div>
                            <div className="headerCart-itemCard-att__size">
                              {att.items.map((item, idx) => {
                                let classes =
                                  att.name === "Color"
                                    ? "headerCart-itemCard__color"
                                    : "headerCart-itemCard__size";
                                if (
                                  i.choosenSize.find(
                                    (a) =>
                                      a[1].toLowerCase() ===
                                        item.value.toLowerCase() &&
                                      a[0].toLowerCase() ===
                                        att.name.toLowerCase()
                                  )
                                ) {
                                  classes +=
                                    att.name === "Color"
                                      ? " imagePage-colorBox-active"
                                      : " imagePage-sizeBox-active";
                                }
                                let roundStyle;
                                if (att.name === "Color") {
                                  roundStyle = () => {
                                    switch (item.value) {
                                      case "#44FF03":
                                        return " attribute-color__green";
                                      case "#03FFF7":
                                        return " attribute-color__cyan";
                                      case "#030BFF":
                                        return " attribute-color__blue";
                                      case "#000000":
                                        return " attribute-color__black";
                                      case "#FFFFFF":
                                        return " attribute-color__white";
                                      default:
                                        return "";
                                    }
                                  };
                                }
                                return att.name === "Color" ? (
                                  <div
                                    key={idx}
                                    className={classes + roundStyle()}
                                    onClick={(e) => {
                                      CartStorage.changeAttInCart(i, [
                                        att.name,
                                        item.value,
                                        myatt,
                                      ]);
                                      this.props.addAttributeInCart(i, [
                                        att.name,
                                        item.value,
                                      ]);
                                    }}
                                  ></div>
                                ) : (
                                  <div
                                    key={idx}
                                    className={classes}
                                    onClick={(e) => {
                                      CartStorage.changeAttInCart(i, [
                                        att.name,
                                        item.value,
                                        myatt,
                                      ]);
                                      this.props.addAttributeInCart(i, [
                                        att.name,
                                        item.value,
                                      ]);
                                    }}
                                  >
                                    {item.value}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="headerCart-itemCard__btnPhoto">
                  <div className="headerCart-itemCard__btn">
                    <div
                      className="headerCart-itemCard__btnInc"
                      onClick={() => {
                        CartStorage.addToLocalStorageCart({
                          ...i,
                          countInCart: 1,
                        });


                        this.props.addThisItemToCart({ ...i, countInCart: 1 });
                      }}
                    >
                      +
                    </div>
                    <div className="headerCart-itemCard__amount">
                      {i.countInCart}
                    </div>
                    <div
                      className="headerCart-itemCard__btnInc"
                      onClick={() => {
                        CartStorage.removeFromLocalStorageCart({
                          ...i,
                          countInCart: 1,
                        });
                        this.props.removeThisItemFromCart({
                          ...i,
                          countInCart: 1,
                        });
                      }}
                    >
                      -
                    </div>
                  </div>
                  <div className="headerCart-itemCard__photo">
                    <img src={i.gallery[0]} alt="main" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="headerCart-total">
          <span className="headerCart-total__name">Total</span>
          <span>
            {this.props.currency}
            {this.props.total}
          </span>
        </div>
        <div className="headerCart-buttons">
          <div
            className="headerCart-bagBtn"
            onClick={(e) => this.props.cartOpenClose(!this.props.cartOpen)}
          >
            <NavLink to="/cart" className="headerLinksA">
              View bag
            </NavLink>
          </div>
          <div className="headerCart-checkoutBtn">CHECK OUT</div>
        </div>
      </div>
    );
  }
}

export default HeaderCart;
