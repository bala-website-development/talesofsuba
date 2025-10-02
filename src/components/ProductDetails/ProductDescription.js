import { productDescription } from "@/data/productDetails";
import React from "react";

const { title, text1, text2 } = productDescription;

const ProductDescription = () => {
  return (
    <section className="product-description">
      <div className="auto-container">
        <h3 className="product-description__title">{title}</h3>
        <p className="product-description__text">{text1}</p>
        <p className="product-description__text">{text2}</p>
      </div>
    </section>
  );
};

export default ProductDescription;
