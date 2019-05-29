import React from "react";
import style from "../styles/Book.module.scss";
import { Link } from "react-router-dom";
import Like from "./Like";

const Book = props => {
  const { book, onLike } = props;
  return (
    <article className={style.article}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
      <div>
        <h2>
          <span>Title: </span>
          {book.volumeInfo.title}
        </h2>
        <h3>
          <span>Author:</span>
          {book.volumeInfo.authors}
        </h3>
        <h3>
          <span>Book Genre: </span>
          {book.volumeInfo.categories}
        </h3>
      </div>
      <section>
        <p>{book.searchInfo.textSnippet}</p>
      </section>
      <Like isFavourite={book.isFavourite} onClick={() => onLike(book.id)} />
      <p className={style.readmore}>
        <Link to={`/Book-API/details/${book.id}`}>Read More >></Link>
      </p>
    </article>
  );
};

export default Book;
