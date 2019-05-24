import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleFavourite } from "../actions/action";
import styles from "../styles/App.module.scss";
import Book from "./EachBook";
import Loader from "./Loader";

const Main = props => {
  const { books } = props.bookState;

  const handleFavoriteToggle = id => {
    props.toggleFavourite(id);
  };
  if (books.length === 0) return <Loader />;
  return (
    <React.Fragment>
      <main className={styles.main}>
        {books.map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              onLike={bookId => handleFavoriteToggle(bookId)}
            />
          );
        })}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { bookState: state };
};

export default connect(
  mapStateToProps,
  { toggleFavourite }
)(Main);

// export default Main;
