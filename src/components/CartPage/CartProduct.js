import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const CartProduct = ({ product = {}, handleQuantity, handleRemove }) => {
  const { id, image, title, price, quantity } = product;
  const total = (price * quantity).toFixed(2);

  return (
    <tr>
      <td>
        <div className="product-box">
          <Image
            src={
              require(`@/images/update-26-01-2021/shops/${image}`).default.src
            }
            alt=""
          />
          <h3>
            <Link href="/product-details">{title}</Link>
          </h3>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div className="quantity-box">
          <button
            onClick={() => handleQuantity(id, false)}
            type="button"
            className="sub"
          >
            <i className="fa fa-minus"></i>
          </button>
          <input
            onChange={(e) => handleQuantity(id, undefined, e.target.value)}
            type="number"
            id="product-1"
            value={quantity}
          />
          <button
            onClick={() => handleQuantity(id, true)}
            type="button"
            className="add"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </td>
      <td>${total}</td>
      <td onClick={() => handleRemove(id)}>
        <i className="flaticon-delete remove-icon"></i>
      </td>
    </tr>
  );
};

export default CartProduct;
