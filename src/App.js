import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Books from "./components/Books";
import Details from "./components/Details";
import Favourites from "./components/Favourites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { fetchBooksSuccess, fetchBooks } from "../src/actions/action";

class App extends Component {
  componentDidMount() {
    this.props.fetchBooksActions();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  booksActions: bookData => dispatch(fetchBooksSuccess(bookData)),
  fetchBooksActions: query => dispatch(fetchBooks(query))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
