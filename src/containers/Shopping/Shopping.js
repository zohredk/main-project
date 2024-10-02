import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios-orders";

const prices = {
  product1: 59,
  product2: 89,
  product3: 99,
  product4: 79,
};

class Shopping extends React.Component {
  state = {
    products: null,
    totalPrice: 0,
    purchased: false,
    loading: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://react-redux-main-1b4b0-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        this.setState({ products: response.data });
      });
  }

  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + priceAdd;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };
  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    const priceSub = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - priceSub;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };

  purchasedHandler = () => {
    this.setState({ purchased: true });
  };

  modalCloseHandler = () => {
    this.setState({ purchased: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      products: this.state.products,
      price: this.state.totalPrice,
      customer: {
        name: "Zohreh",
        email: "zohredkia@gmail.com",
      },
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchased: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let order = null;

    if (this.state.loading) {
      order = <Loader />;
    }

    let controls = <Loader />;

    if (this.state.products) {
      controls = (
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          price={this.state.totalPrice}
          order={this.purchasedHandler}
        />
      );

      order = (
        <Order
          products={this.state.products}
          price={this.state.totalPrice}
          continue={this.purchaseContinueHandler}
          cancel={this.modalCloseHandler}
        />
      );
    }

    return (
      <Wrapper>
        <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
          {order}
        </Modal>
        {controls}
      </Wrapper>
    );
  }
}

export default Shopping;
