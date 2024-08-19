import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SettingScreen from '../pages/SettingScreen';
import HelpScreen from '../pages/HelpScreen';
import WalletScreen from '../pages/WalletScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'add';
          } else if (route.name === 'Wallet') {
            iconName = 'wallet';
          } else if (route.name === 'Setting') {
            iconName = 'settings';
          } else if (route.name === 'Help') {
            iconName = 'chatbubbles';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="logout" component={LoginScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};
