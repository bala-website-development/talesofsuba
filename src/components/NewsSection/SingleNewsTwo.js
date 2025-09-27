import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleNewsTwo = ({ news = {} }) => {
  const { image, date, comments, title } = news;

  return (
    <SwiperSlide>
      <div className="news-two__box">
        <div className="news-two__image">
          <Image
            src={require(`@/images/update-1-12-2020/blog/${image}`).default.src}
            alt={title}
          />
        </div>
        <div className="news-two__content">
          <ul className="list-unstyled news-two__meta">
            <li>
              <Link href="/blog-single">{date}</Link>
            </li>
            <li>
              <Link href="/blog-single">
                <a>{comments} Comments</a>
              </Link>
            </li>
          </ul>
          <h3>
            <Link href="/blog-single">{title}</Link>
          </h3>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleNewsTwo;
