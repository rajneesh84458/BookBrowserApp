import React, { createContext, useReducer, useEffect } from 'react';
import { fetchBooks } from '../utils/api';
import { bookReducer } from './BookReducer';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const initialState = {
    books: [],
    filteredBooks: [],
    categories: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await fetchBooks();
        dispatch({ type: 'SET_BOOKS', payload: books });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    getBooks();
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
