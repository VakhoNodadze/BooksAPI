import * as ActionTypes from "../actions/action";

const initialState = {
  books: []
};

export default function BookHabits(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        books: action.payload.map(book => ({ ...book, isFavourite: false }))
      };
    case ActionTypes.TOGGLE_FAVOURITE:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.id
            ? { ...book, isFavourite: !book.isFavourite }
            : book
        )
      };
    default:
      return state;
  }
}
