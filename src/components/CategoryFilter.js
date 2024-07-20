import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CategoryFilter = ({ category, isSelected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: isSelected ? 'blue' : 'grey' }}>
    <Text>{category}</Text>
  </TouchableOpacity>
);

export default CategoryFilter;
