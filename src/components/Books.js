import React, { Component } from "react";
import { connect } from "react-redux";
import {
  toggleFavourite,
  fetchBooksSuccess,
  fetchBooks
} from "../actions/action";
import styles from "../styles/Books.module.scss";
import Book from "./EachBook";
import Loader from "./Loader";

class Main extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    console.log(this.props);
  }
  updateSearch = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { books } = this.props.bookState;
    const filteredBooks = books.filter(book => {
      return (
        book.volumeInfo.title.toLowerCase().indexOf(this.state.search) !== -1
      );
    });

    const handleFavourite = id => {
      this.props.toggleFavourite(id);
    };
    if (books.length === 0) return <Loader />;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.updateSearch}
            />
            <div className={styles.search} />
          </div>
          <main className={styles.main}>
            {filteredBooks.map(book => {
              return (
                <Book
                  key={book.id}
                  book={book}
                  onLike={bookId => handleFavourite(bookId)}
                />
              );
            })}
            {console.log(filteredBooks)}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { bookState: state };
};

export default connect(
  mapStateToProps,
  { toggleFavourite, fetchBooks }
)(Main);
