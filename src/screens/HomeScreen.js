import React, { useContext, useState } from 'react';
import { View, FlatList, Button, Text, TouchableOpacity } from 'react-native';
import { BookContext } from '../context/BookContext';
import BookItem from '../components/BookItem';
import CategoryFilter from '../components/CategoryFilter';

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(BookContext);
  const { filteredBooks, categories, loading } = state;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = category => {
    setSelectedCategory(category);
    dispatch({ type: 'FILTER_BY_CATEGORY', payload: category });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <CategoryFilter
            category={item}
            isSelected={item === selectedCategory}
            onPress={() => handleCategoryPress(item)}
          />
        )}
        keyExtractor={item => item}
      />
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => (
          <BookItem
            book={item}
            onPress={() => navigation.navigate('BookDetails', { book: item })}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Filter" onPress={() => navigation.navigate('Filter')} />
    </View>
  );
};

export default HomeScreen;
