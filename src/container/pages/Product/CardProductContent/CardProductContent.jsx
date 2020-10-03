import React, { Component } from "react";
import "./CardProductContent.css";

class CardProductContent extends Component {
  state = {
    order: 0,
    name: "Heriyanto",
  };

  // Function Plus & Minus
  handlePlus = () => {
    this.setState({ order: this.state.order + 1 });
  };

  handleMinus = () => {
    this.setState({ order: this.state.order - 1 });
  };

  render() {
    return (
      <div className="card">
        <div className="img-thum-prod">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
            alt="product-image"
            srcset=""
          />
        </div>
        <p className="product-title">
          Paket Ayam Spesial dan Cheese [1 pact - 20 pieces]
        </p>
        <p className="product-price">Rp 300,000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProductContent;
