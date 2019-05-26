export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const fetchBooksRequest = query => ({
  type: FETCH_REQUEST,
  query
});

export const fetchBooksSuccess = payload => {
  return { type: FETCH_SUCCESS, payload };
};

export const fetchBooksFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

export const toggleFavourite = id => ({
  type: TOGGLE_FAVOURITE,
  id
});

export function fetchBooks() {
  return dispatch => {
    dispatch(fetchBooksRequest());
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction`
    )
      .then(res => res.json())
      .then(books => {
        dispatch(fetchBooksSuccess(books.items));
        return books.items;
      })
      .catch(error => dispatch(fetchBooksFailure(error)));
  };
}
