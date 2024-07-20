// src/context/BookReducer.js
export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload,
        filteredBooks: action.payload,
        categories: [...new Set(action.payload.map(book => book.category))],
        loading: false,
      };
    case 'FILTER_BY_CATEGORY':
      return {
        ...state,
        filteredBooks: state.books.filter(
          book => book.category === action.payload,
        ),
      };
    case 'FILTER_BY_TITLE':
      return {
        ...state,
        filteredBooks: state.books.filter(book =>
          book.title.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
