import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { BookContext } from '../context/BookContext';

const FilterScreen = ({ navigation }) => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');

  const handleFilter = () => {
    dispatch({ type: 'FILTER_BY_TITLE', payload: title });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Search by title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Apply Filter" onPress={handleFilter} />
    </View>
  );
};

export default FilterScreen;
