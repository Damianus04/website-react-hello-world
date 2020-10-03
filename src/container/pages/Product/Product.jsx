import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import CardProductContent from "./CardProductContent/CardProductContent";

class Product extends Component {
  state = {
    order: 4,
    name: "Prawito",
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <p>Product Page</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="https://etanee.id/img/content/img_logo_etanee_white.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="troley">
            <img
              src="https://etanee.id/img/icon/ic_cart_white.svg"
              alt=""
              srcset=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
