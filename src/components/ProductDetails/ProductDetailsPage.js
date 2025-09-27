import { socials } from "@/data/header";
import { productDetails } from "@/data/productDetails";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image, title, price, stars, customerReviews, text, text2 } =
  productDetails;

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="product-details">
      <div className="auto-container">
        <Row>
          <Col lg={12} xl={6}>
            <a className="product-details__image lightbox-image">
              <Image src={image.src} alt="" />
            </a>
          </Col>
          <Col lg={12} xl={6}>
            <div className="product-details__top">
              <h3 className="product-details__title">{title}</h3>
              <p className="product-details__price">${price}</p>
            </div>
            <div className="product-details__reveiw">
              {Array.from(Array(stars)).map((_, i) => (
                <i key={i} className="fa fa-star"></i>
              ))}

              <span>{customerReviews} Customer Reviews</span>
            </div>
            <div className="product-details__content">
              <p>{text}</p>
              <p>
                <TextSplit text={text2} />
              </p>
            </div>
            <div className="product-details__quantity">
              <h3 className="product-details__quantity-title">
                Choose quantity
              </h3>
              <div className="quantity-box">
                <button
                  onClick={() =>
                    setQuantity((preQuantity) =>
                      preQuantity > 1 ? preQuantity - 1 : preQuantity
                    )
                  }
                  type="button"
                  className="sub"
                >
                  <i className="fa fa-minus"></i>
                </button>
                <input
                  onChange={(e) => setQuantity(+e.target.value)}
                  type="number"
                  id="1"
                  value={quantity}
                />
                <button
                  onClick={() => setQuantity((preQuantity) => preQuantity + 1)}
                  type="button"
                  className="add"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-details__buttons">
              <Link href="/cart">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Add to wishlist</span>
                </a>
              </Link>
              <Link href="/cart">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Add to cart</span>
                </a>
              </Link>
            </div>
            <div className="product-details__social">
              <span>Share with friends</span>
              {socials.map(({ id, icon, href }) => (
                <a key={id} href={href} className={icon}></a>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
