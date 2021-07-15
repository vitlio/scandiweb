import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import CartStorage from "../cartStorage/cartStorage";
import "./cart.css";

class Cart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      total: this.props.total,
      cart: this.props.cart,
      currency: this.props.currency,
      currencyName: this.props.currencyName,
      cartOpen: this.props.cartOpen,
      number: 1,
    };
  }
  beforePicture(e, i) {
    let target = e.target.offsetParent.childNodes[0];
    let index = i.gallery.findIndex((src) => src === target.src);
    if (index > 0) target.src = i.gallery[index - 1];
  }
  afterPicture(e, i) {
    let target = e.target.offsetParent.childNodes[0];
    let index = i.gallery.findIndex((src) => src === target.src);
    if (index < i.gallery.length - 1) target.src = i.gallery[index + 1];
  }
  componentDidMount() {
    document.body.classList.remove("component-overflow");
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.cartOpen) return false;
    if (!nextProps.cartOpen) return true;
  }
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
      <div className="wrap">
        <div className="wrap-cart">
          <div className="categoryName">
            <h2 className="categoryName__font">CART</h2>
          </div>
          {this.props.cart.map((i, idx) => {
            let myatt = idx;
            return (
              <div key={idx} className="cartPage-item">
                <div className="cartPage-itemCard__description">
                  <div>
                    <NavLink to={"/item/" + i.name}>
                      <div className="cartPage-itemCard__title">
                        <span className="cartPage-itemCard__titleName">
                          {i.name.split(" ")[0]}
                        </span>
                        <br />
                        {i.name.split(" ").splice(1).join(" ")}
                      </div>
                    </NavLink>
                    <div className="cart-itemCard__price">
                      {this.props.currency}
                      {
                        i.prices.filter(
                          (cur) => cur.currency === this.props.currencyName
                        )[0].amount
                      }
                    </div>
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
                                    ? "cartPage-itemCard__color"
                                    : "cartPage-itemCard__size";
                                if (
                                  i.choosenSize.find(
                                    (a) =>
                                      a[1].toLowerCase() ===
                                        item.value.toLowerCase() &&
                                      a[0].toLowerCase() ===
                                        att.name.toLowerCase()
                                  )
                                )
                                  classes +=
                                    att.name === "Color"
                                      ? " imagePage-colorBox-active"
                                      : " imagePage-sizeBox-active";
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
                  <div className="cart-itemCard__photo">
                    <img
                      ref={this.ref}
                      className="cart-img"
                      src={i.gallery[0]}
                      alt="main"
                    />
                    <img
                      className="arrow-btn-left"
                      src="images/arrow-btn-left.svg"
                      alt="<"
                      onClick={(e) => this.beforePicture(e, i)}
                    />
                    <img
                      src="images/arrow-btn-left.svg"
                      className="arrow-btn-left rotate180"
                      alt=">"
                      onClick={(e) => this.afterPicture(e, i)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartPage-totalContainer">
          Total: {this.props.currency} {this.props.total}
        </div>
      </div>
    );
  }
}

export default Cart;
