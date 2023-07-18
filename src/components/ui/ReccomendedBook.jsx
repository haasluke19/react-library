import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

export default function RecommendedBook({ book }) {

  return (
    <div className="book">
      <Link to={`${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
    </div>
  );
}