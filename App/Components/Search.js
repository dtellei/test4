import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard, Image } from 'react-native'
import { Images, Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'

export default function Search(props) {
  const [search, setSearch] = useState('');

  const submitSearch = () => {
    Keyboard.dismiss();
    props.loadPlants(search);
    
  }

	return (
	  <View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={submitSearch}
        >
          <Image
            style={styles.searchIcon}
            source={Images.search}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search for a plant"
          onChangeText={search => setSearch(search)}
          clearButtonMode='while-editing'
          onSubmitEditing={() => props.loadPlants(search)}
        />
      </View>
	  </View>
	)
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.silver,
    padding: 10,
    borderRadius: 10,
    width: Metrics.screenWidth * .9,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 12
  },
  searchTextInput: {
    marginLeft: 10,
    flex: 1,
    marginTop: 2,
    marginBottom: 2
  },
  searchIcon: {
    marginLeft: 5,
    width: 18,
    height: 18,
    resizeMode: 'stretch',
    marginTop: 2,
    marginBottom: 2
  }
});
