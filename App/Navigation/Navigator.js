import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Listings from '../Screens/Listings';
import Settings from '../Screens/Settings'; 
import Details from '../Screens/Details';

const Stack = createStackNavigator();

function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Plants" component={Listings} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Plants') {
                            iconName = 'leaf'
                        } else if (route.name === 'Settings') {
                            iconName = 'settings-sharp'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
                tabBarOptions={{
                    labelStyle: { fontSize: 20 },
                    activeTintColor: 'green',
                    style: { height: '8%', paddingTop: '1%', paddingBottom: '1%'}
                }}
            > 
                <Tab.Screen name="Plants" component={Home}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}