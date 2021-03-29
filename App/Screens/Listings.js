import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import APIRequest from '../Config/APIRequest'

import Plants from '../Components/Plants'
import Search from '../Components/Search'
import images from '../Themes/Images';

export default function App({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  // retrieve lists of plants
  const loadPlants = async (plantSearch = '', plantFilter = '') => {
    setLoading(true);
    setPlants([]);
    let results = [];
    // if there is no search term, then get list of plants
    if (plantSearch !== '') {
      results = await APIRequest.requestSearchPlants(plantSearch);
    } else {
      results = await APIRequest.requestPlantList(plantFilter);
    }
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);


  return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss()}
        >
          <Image
            style={styles.logo}
            source={Images.logo}
          />
        </TouchableWithoutFeedback>
        
        <Search
          loadPlants={loadPlants}
        />

        {loading && (
          <ActivityIndicator
            size='large'
            color='black'
            style={styles.indicator}
          />
        )}
      
        {!loading && (
          <Plants
            plants={plants}
            style={styles.plants}
            navigation={navigation}
          />
        )}

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: Metrics.screenWidth * .75,
    height: Metrics.screenWidth * .35,
    resizeMode: 'contain',
    marginTop: 15
  },
  indicator: {
    flex: 1
  }
});