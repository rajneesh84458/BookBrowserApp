import React from 'react';
import { View, Text, Image } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Image source={{ uri: book.thumbnail }} style={{ width: 100, height: 100 }} />
      <Text>{book.title}</Text>
      <Text>{book.category}</Text>
      <Text>{book.author}</Text>
      <Text>{book.description}</Text>
    </View>
  );
};

export default BookDetailScreen;
