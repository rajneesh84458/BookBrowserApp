// src/components/__tests__/BookItem.test.js

import React from 'react';
import { render } from '@testing-library/react-native';
import BookItem from '../BookItem';

describe('BookItem', () => {
  it('renders correctly', () => {
    const book = {
      title: 'Test Book',
      category: 'Test Category',
      thumbnail: 'http://example.com/thumbnail.jpg',
    };
    const { getByText } = render(<BookItem book={book} onPress={() => { }} />);
    expect(getByText('Test Book')).toBeTruthy();
    expect(getByText('Test Category')).toBeTruthy();
  });
});
