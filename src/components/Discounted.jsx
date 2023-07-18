import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

export default function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice)
              .slice(0, 8)
              .map((book) =><Book book={book} key={book.id} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
