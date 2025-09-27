import { cartPage } from "@/data/cartPage";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CartProduct from "./CartProduct";

const { items, products: defaultProducts } = cartPage;

const CartPage = () => {
  const [products, setProducts] = useState(defaultProducts);
  const shipping = 0.0;

  const handleQuantity = (id, isPlus, quantity) => {
    setProducts((preProducts) => {
      const newProducts = [...preProducts];
      const preProductIndex = preProducts.findIndex((it) => it.id === id);
      const preProduct = preProducts[preProductIndex];
      const newProduct = {
        ...preProduct,
        quantity: isPlus
          ? preProduct.quantity + 1
          : quantity
          ? +quantity
          : isPlus === false
          ? preProduct.quantity > 1
            ? preProduct.quantity - 1
            : 1
          : 1,
      };
      newProducts[preProductIndex] = newProduct;
      return newProducts;
    });
  };

  const handleRemove = (id) => {
    setProducts((preProducts) =>
      preProducts.filter((product) => product.id !== id)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("couponCode"));
  };

  const subtotal = products.reduce(
    (preCount, current) => preCount + current.price * current.quantity,
    0
  );

  const total = shipping + subtotal;

  return (
    <section className="cart-page">
      <div className="auto-container">
        <div className="table-responsive">
          <table className="table cart-table">
            <thead>
              <tr>
                {items.map((item, i) => (
                  <th key={i}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  handleQuantity={handleQuantity}
                  handleRemove={handleRemove}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Row>
          <Col lg={8}>
            <form
              onSubmit={handleSubmit}
              className="default-form cart-cupon__form"
            >
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="cart-cupon__input"
                name="couponCode"
              />
              <button className="theme-btn btn-style-one" type="submit">
                <i className="btn-curve"></i>
                <span className="btn-title">Apply coupon</span>
              </button>
            </form>
          </Col>
          <Col lg={4}>
            <ul className="cart-total list-unstyled">
              <li>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)} </span>
              </li>
              <li>
                <span>Shipping Cost</span>
                <span>${shipping} </span>
              </li>
              <li>
                <span>Total</span>
                <span className="cart-total__total">${total.toFixed(2)}</span>
              </li>
            </ul>
            <div className="cart-page__buttons">
              <Link href="/cart">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">update</span>
                </a>
              </Link>
              <Link href="/checkout">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Checkout</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CartPage;
