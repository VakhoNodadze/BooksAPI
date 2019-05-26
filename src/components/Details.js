import React, { Component } from "react";
import Loader from "./Loader";
import details from "../styles/Details.module.scss";

class Details extends Component {
  state = { book: null };

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${
        this.props.match.params.id
      }`
    )
      .then(res => res.json())
      .then(book => {
        this.setState({ book: book });
        return book;
      })
      .catch(error => console.log("Fetching Faled!"));
  }

  render() {
    const { book } = this.state;
    if (!book) return <Loader />;
    return (
      book && (
        <main className={details.main}>
          <img
            src={
              book.volumeInfo.imageLinks.small ||
              book.volumeInfo.imageLinks.thumbnail
            }
            alt="Book Cover"
          />
          <div className={details.description}>
            <h2>
              <span>Title: </span>
              {book.volumeInfo.title}
            </h2>
            <h3>
              <span>Author:</span>
              {book.volumeInfo.authors}
            </h3>
            <p>
              <strong>Book Description: </strong>
              {book.volumeInfo.description}
            </p>
          </div>
          <div className={details.details}>
            <p>
              <strong>Publisher: </strong> {book.volumeInfo.publisher}
            </p>
            <p>
              <strong>Publication Date: </strong>{" "}
              {book.volumeInfo.publishedDate}
            </p>
            <p>
              <strong>Pages: </strong> {book.volumeInfo.printedPageCount}
            </p>
            <p>
              <strong>Digital Version: </strong>{" "}
              <a
                rel="noopener noreferrer"
                href={`${book.accessInfo.webReaderLink})`}
                target="_blank"
              >
                Click here to view the book online
              </a>
            </p>
          </div>
        </main>
      )
    );
  }
}

export default Details;
