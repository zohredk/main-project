import React, { useState, useEffect } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios-orders";
import { useNavigate } from "react-router-dom";

const prices = {
  product1: 59,
  product2: 89,
  product3: 99,
  product4: 79,
};

const Shopping = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchased, setPurchased] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://react-redux-main-1b4b0-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const addProductHandler = (type) => {
    const prevCount = products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = { ...products };
    updatedProducts[type] = updatedCount;
    const priceAdd = prices[type];
    const newPrice = totalPrice + priceAdd;
    setTotalPrice(newPrice);
    setProducts(updatedProducts);
  };

  const removeProductHandler = (type) => {
    const prevCount = products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = { ...products };
    updatedProducts[type] = updatedCount;
    const priceSub = prices[type];
    const newPrice = totalPrice - priceSub;
    setTotalPrice(newPrice);
    setProducts(updatedProducts);
  };

  const purchasedHandler = () => {
    setPurchased(true);
  };

  const modalCloseHandler = () => {
    setPurchased(false);
  };

  const purchaseContinueHandler = () => {
    navigate("/checkout");
  };

  let order = null;
  if (loading) {
    order = <Loader />;
  }

  let controls = <Loader />;
  if (products) {
    controls = (
      <Controls
        productAdd={addProductHandler}
        productRemove={removeProductHandler}
        price={totalPrice}
        order={purchasedHandler}
      />
    );
    order = (
      <Order
        products={products}
        price={totalPrice}
        continue={purchaseContinueHandler}
        cancel={modalCloseHandler}
      />
    );
  }

  return (
    <Wrapper>
      <Modal show={purchased} modalClose={modalCloseHandler}>
        {order}
      </Modal>
      {controls}
    </Wrapper>
  );
};

export default Shopping;
