import React from 'react';
import { WelcomeScreen } from './src/screens/getStarted/welcomeScreen';
import Home from './src/screens/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeScreen"
          component={WelcomeScreen} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;