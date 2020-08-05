import React from 'react';
import Profile from '../screen/Profile';
import SplashScreen from '../screen/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';

let ProfileNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
