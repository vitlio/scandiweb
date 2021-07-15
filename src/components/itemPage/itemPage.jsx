import React from "react";
import { Route } from "react-router";
import Parser from "html-react-parser";
import ITEM_PAGE_W from "../itemPage/itemPage_w";
import CartStorage from "../cartStorage/cartStorage";
import "./itemPage.css";

class ItemPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      choosenSize: [],
      item: "",
      imageURL: "",
      currency: this.props.currency,
      path: props.match.url,
    };
  }

  changeImageURL(e) {
    this.setState({ imageURL: e.target.src });
  }
  recordAttribute(field, value) {
    if (!this.state.choosenSize.find((i) => i[0]) === field) {
      this.setState({
        choosenSize: [...this.state.choosenSize, [field, value]],
      });
    } else {
      this.setState({
        choosenSize: [
          ...[...this.state.choosenSize].filter((i) => i[0] !== field),
          [field, value],
        ],
      });
    }
  }
  createThisItem() {
    return {
      ...this.state.item,
      choosenSize: this.state.choosenSize,
      countInCart: 1,
    };
  }
  componentDidMount() {
    let url =
      "http://localhost:4000?query={category{products{category,gallery,inStock,name,description,attributes{id,name,type,items{displayValue,value,id}} prices{currency,amount}}}}";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let currentItem = data.data.category.products.filter(
          (i) =>
            i.name.toLowerCase() ===
            this.props.match.params.itemName.toLowerCase()
        )[0];
        this.setState({ item: currentItem });
        this.setState({ imageURL: currentItem.gallery[0] });
        this.setState({
          price: currentItem.prices.filter(
            (i) => i.currency === this.props.currencyName
          )[0].amount,
        });
        this.props.itemDispatch(currentItem);
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      let url =
        "http://localhost:4000?query={category{products{category,gallery,inStock,name,description,attributes{id,name,type,items{displayValue,value,id}} prices{currency,amount}}}}";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let currentItem = data.data.category.products.filter(
            (i) =>
              i.name.toLowerCase() ===
              this.props.match.params.itemName.toLowerCase()
          )[0];
          this.setState({ item: currentItem });
          this.setState({ imageURL: currentItem.gallery[0] });
          this.setState({
            price: currentItem.prices.filter(
              (i) => i.currency === this.props.currencyName
            )[0].amount,
          });
          this.props.itemDispatch(currentItem);
        });
    }
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.cartOpen) return false;
    if (!nextProps.cartOpen) return true;
  }
  render() {
    this.props.cartOpen
      ? document.body.classList.add("component-overflow")
      : document.body.classList.remove("component-overflow");
    console.log("itemPage", this.props.cart);
    return (

      <>
        <Route path="item/:itemName?" render={() => <ITEM_PAGE_W />} />
        {this.state.item && (
          <div className="wrap">
            <div className="imagePage-container">
              <div className="imagePage-photoSection">
                <div className="imagePage-photoCollection">
                  {this.state.item.gallery.map((i, idx) => {
                    return (
                      <img
                        key={i}
                        src={i}
                        alt={idx}
                        onClick={(e) => this.changeImageURL(e)}
                      />
                    );
                  })}
                </div>

                <div className="imagePage-mainPhoto">
                  {" "}
                  <img src={this.state.imageURL} alt="main" />{" "}
                </div>
              </div>
              <div className="imagePage-descriptionSection">
                <div className="imagePage-title">
                  <div className="imagePage-title-name">
                    {this.state.item.name.split(" ")[0]}
                  </div>
                  <div>
                    {this.state.item.name.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                {this.state.item.attributes &&
                  this.state.item.attributes.map((att, idx) => {
                    return (
                      <div key={idx} className="imagePage-sizes">
                        <div className="imagePage-block-title">{att.name}:</div>
                        {att.items.map((item, idx) => {
                          let classes =
                            att.name === "Color"
                              ? "imagePage-colorBox"
                              : "imagePage-sizeBox";
                          if (this.state.choosenSize.length) {
                            if (
                              this.state.choosenSize.find(
                                (i) =>
                                  i[1].toLowerCase() ===
                                    item.value.toLowerCase() &&
                                  i[0].toLowerCase() === att.name.toLowerCase()
                              )
                            )
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
                                this.recordAttribute(att.name, item.value);
                              }}
                            ></div>
                          ) : (
                            <div
                              key={idx}
                              className={classes}
                              onClick={(e) => {
                                this.recordAttribute(att.name, item.value);
                              }}
                            >
                              {item.value}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                <div className="imagePage-price">
                  <div className="imagePage-block-title">PRICE:</div>
                  <div className="imagePage-block-price">
                    {this.props.currency}
                    {
                      this.state.item.prices.filter(
                        (i) => i.currency === this.props.currencyName
                      )[0].amount
                    }
                  </div>
                </div>
                {this.state.item.inStock ? (
                  this.state.item.attributes.length ===
                  this.state.choosenSize.length ? (
                    <div
                      className="imagePage-cartButton"
                      onClick={() => {
                        this.props.addThisItemToCart(this.createThisItem());
                        CartStorage.addToLocalStorageCart(
                          this.createThisItem()
                        );
                      }}
                    >
                      ADD TO CART
                    </div>
                  ) : (
                    <div className="imagePage-cartButton__disable">
                      ADD TO CART
                    </div>
                  )
                ) : (
                  <div className="imagePage-cartButton__disable">
                    OUT OF STOCK
                  </div>
                )}
                <div className="imagePage-description">
                  {Parser(this.state.item.description)}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ItemPage;
