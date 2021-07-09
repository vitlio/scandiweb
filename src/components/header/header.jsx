import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import CURRENCY_W from "../currency/currency_w";
import HEADER_CART_W from "../headerCart/headerCart_w";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerMenu: [],
      currencies: [],
      cart: this.props.cart,
    };

    this.logist = (e) => {
      if (
        !e.target.closest(".currencyChange") &&
        !e.target.closest(".currencyChangeArrow")
      )
        if (this.props.currencyArrow) {
          this.props.currencyArrowOpen();
        }
      if (e.target.closest(".headerCart")) {
        return;
      } else if (this.props.cartOpen && !e.target.closest(".shopCartButton")) {
        this.props.cartOpenClose();
      }
    };
  }

  componentDidMount() {
    document.addEventListener("click", (e) => this.logist(e));

    fetch(
      "http://localhost:4000?query={category{products{category}}currencies}"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          headerMenu: Array.from(
            new Set(data.data.category.products.map((i) => i.category))
          ),
        });
        this.setState({ currencies: data.data.currencies });
      });
  }
  componentWillUnmount() {
    document.removeEventListener("click", (e) => this.logist(e));
    localStorage.setItem("cart", this.props.cart);
  }
  render() {
    return (
      <div className="wrap">
        {this.props.cartOpen && (
          <div className="headerCart-fade headerCart-fade__active" />
        )}
        <div className="headerMain">
          <div className="headerLinks">
            {this.state.headerMenu.map((i, idx) => {
              let link = "/" + i.toLowerCase();
              return (
                <div key={idx} className="container-link">
                  <NavLink
                    to={link}
                    className="headerLinksA"
                    activeClassName="headerActivLink"
                    onClick={() => this.props.currentPageDispatch(i)}
                  >
                    {i.toUpperCase()}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="logo-div">
            <img
              src="http://localhost:3000/images/a-logo.svg"
              alt="shop cart"
              className="shop-cart-image"
            />
          </div>

          <ul className="headerRightMenu">
            <li
              onClick={(e) => {
                this.props.currencyArrowOpen();
              }}
            >
              {this.props.currencyArrow && !this.props.cartOpen && (
                <CURRENCY_W />
              )}
              <span className="currencyChange">{this.props.currency}</span>
              <img
                className={
                  this.props.currencyArrow
                    ? "currencyChangeArrow"
                    : "currencyChangeArrow currencyChangeArrow-open"
                }
                src="http://localhost:3000/images/currency-arrow.svg"
                alt="currency arrow"
              />
            </li>

            <li
              className="shopCartButton"
              onClick={() => {
                this.props.cartOpenClose();
              }}
            >
              <img
                src="http://localhost:3000/images/empty-cart.svg"
                alt="cart"
              />
              {this.props.cart.length > 0 && (
                <div className="shopCartButton__indicator">
                  {this.props.cart &&
                    this.props.cart.reduce(
                      (prev, i) => prev + i.countInCart,
                      0
                    )}
                </div>
              )}
            </li>
            {this.props.cartOpen && <HEADER_CART_W />}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
