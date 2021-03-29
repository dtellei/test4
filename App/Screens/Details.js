import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Images, Metrics} from '../Themes'


export default function App({route, navigation}) {
    const { common_name } = route.params;
    const { scientific_name } = route.params;
    const { family } = route.params;
    const { genus } = route.params;
    const { image_url } = route.params;

    return (
      <SafeAreaView style={styles.container}>
        <Image
            style={styles.logo}
            source={Images.logo}
        />
        <View style={styles.detailsContainer}> 
            <View style={styles.headingContainer}>
              <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{common_name}</Text>
            </View>
            <View style={styles.info}>
              <Image
                style={styles.image}         
                source={{ uri: image_url }} 
              />
              <View style={styles.innerInfo}>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text>{scientific_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text>{family}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text>{genus}</Text>
                </View>
              </View>
            </View>
            
            <Text style={styles.description}>
                Scientific Name: <Text style={{ fontWeight: 'bold' }}>{scientific_name}</Text>. This plant comes from the {family} family and the {genus} genus.
            </Text>
        </View>
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
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    borderWidth: 1,
    marginLeft: 10
  },
  headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
  },
  detailsContainer: {
      flex: 1
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  },
  info: {
    flexDirection: 'row'
  },
  innerInfo: {
    flexDirection: 'column',
    marginLeft: 10
  }
});