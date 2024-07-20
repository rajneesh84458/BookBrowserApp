import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BookItem = ({ book, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image source={{ uri: book.thumbnail }} style={{ width: 50, height: 50 }} />
      <Text>{book.title}</Text>
      <Text>{book.category}</Text>
    </View>
  </TouchableOpacity>
);

export default BookItem;
