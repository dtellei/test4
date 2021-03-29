import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image, Keyboard } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';

export default function Plants(props) {
  const [result, setResult] = useState(null);

  const _openImage = async (image_url) => {
    Keyboard.dismiss();
    let result = await WebBrowser.openBrowserAsync(image_url);
    setResult(result);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.plants}
        renderItem={( { item, index } ) =>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Details', {
                common_name: item.common_name,
                scientific_name: item.scientific_name,
                family: item.family,
                genus: item.genus,
                image_url: item.http_image_url
              });
            }}
          >
            <View style={styles.innerContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: item.http_image_url }}
                />
              </View>
              <View style={styles.description}>
                <Text style={styles.title}>
                  {item.common_name}
                </Text>
                <Text style={styles.innerDescription}>
                  Scientific Name <Text style={{ fontWeight: 'bold' }}>{item.scientific_name}</Text>. This plant comes from the {item.family} family and the {item.genus} genus.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => {
          return item + index.toString()
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10
  },
  description: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 28,
    width: Metrics.screenWidth * .75
  },
  image: {
    height: 75,
    width: 75,
    resizeMode: 'cover',
    borderWidth: 1,
    borderRadius: 75 / 2,
    marginRight: 5
  },
  innerDescription: {
    width: Metrics.screenWidth * .75
  }
});
