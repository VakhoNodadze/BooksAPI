import React from "react";
import styles from "../styles/App.module.scss";
import Book from "./EachBook";
import Loader from "./Loader";
import { connect } from "react-redux";
import { toggleFavourite } from "../actions/action";

const Favourties = props => {
  const { books } = props.bookState;

  const handleFavoriteToggle = id => {
    props.toggleFavourite(id);
  };
  if (books.length === 0) return <Loader />;
  return (
    <main className={styles.main}>
      {books
        .filter(book => book.isFavourite)
        .map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              onLike={bookId => handleFavoriteToggle(bookId)}
            />
          );
        })}
    </main>
  );
};

const mapStateToProps = state => {
  return { bookState: state };
};
export default connect(
  mapStateToProps,
  { toggleFavourite }
)(Favourties);
