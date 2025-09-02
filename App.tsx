import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test1 from './screens/Test1';
import Greet from './screens/Greet';
import ComponentShowcase from './screens/ComponentShowcase';  
import SpotifyLoginScreen from './screens/SpotifyLoginScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SpotifyLogin"
          component={SpotifyLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComponentShowcase"
          component={ComponentShowcase}
          options={{ title: 'Component Showcase' }}
        />
        <Stack.Screen
          name="Test1"
          component={Test1}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Greet"
          component={Greet}
          options={{ title: 'Greet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}