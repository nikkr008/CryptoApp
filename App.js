import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerNavigator} from './src/routes/Navigator';
import SplashScreen from './src/pages/SplashScreen';
import WelcomeScreen from './src/pages/WelcomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import PhonePage from './src/pages/PhonePage';
import OtpPage from './src/pages/OtpPage';
import CreatePassword from './src/pages/CreatePassword';
import LocationPage from './src/pages/LocationPage';
import RegisterScreen from './src/pages/RegisterScreen';
import Charts from './src/utils/Charts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="PhonePage" component={PhonePage} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="LocationPage" component={LocationPage} />
        <Stack.Screen name="Charts" component={Charts} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
