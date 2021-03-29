import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Images, Colors, Metrics } from '../Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
    const [settings, setSettings] = useState([]);
    const [selectedFlower, setSelectedFlower] = useState("none");
    const [selectedFruit, setSelectedFruit] = useState("none");
    const [vegetableChecked, setVegetableChecked] = useState(false);
    const [fruitChecked, setFruitChecked] = useState(false);

    const setFlowerFromStorage = (flower_string) => {
        setSelectedFlower(JSON.parse(flower_string));
    }

    const storeSettings = async (newSettingValue) => {
        try {
            await AsyncStorage.setItem('flower', JSON.stringify(newSettingValue));
        } catch (e) {
            console.error(e);
        }
    }

    const readSettings = async () => {
        try {
            const flower_settings = await AsyncStorage.getItem('flower');
            if (flower_settings !== null) {
                setSettingsFromStorage(flower_settings);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        readSettings();
    }, [])

    return (
      <SafeAreaView style={styles.container}> 
          <Image
            style={styles.logo}
            source={Images.logo}
          />
          <View style={styles.settingsContainer}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Settings</Text>
            <CheckBox title='Vegetable' checked={vegetableChecked} onPress={() => setVegetableChecked(!vegetableChecked)}/>
            <CheckBox title='Edible' checked={fruitChecked} onPress={() => setFruitChecked(!fruitChecked)}/>
            <View style={styles.labelContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Flower Color</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fruit Color</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedFlower}
                    onValueChange={(itemValue, itemIndex) => setSelectedFlower(itemValue)}
                >
                    <Picker.Item label="Red" value="red" />
                    <Picker.Item label="Yellow" value="yellow" />
                    <Picker.Item label="Orange" value="orange" />
                    <Picker.Item label="None" value="none" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Violet" value="violet" />
                    <Picker.Item label="Pink" value="pink" />
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedFruit}
                    onValueChange={(itemValue, itemIndex) => setSelectedFruit(itemValue)}
                >                    
                    <Picker.Item label="Red" value="red" />
                    <Picker.Item label="Yellow" value="yellow" />
                    <Picker.Item label="Orange" value="orange" />
                    <Picker.Item label="None" value="none" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Violet" value="violet" />
                    <Picker.Item label="Pink" value="pink" />
                </Picker>
            </View>
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
  settingsContainer: {
    width: Metrics.screenWidth * .9,
    flex: 1
  },
  pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
  },
  picker: {
      height: 50,
      width: Metrics.screenWidth * .4
  },
  labelContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});