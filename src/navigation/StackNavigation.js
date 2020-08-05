import React from 'react';
import Message from '../component/Message';
import Login from '../screen/Login';
import {createStackNavigator} from '@react-navigation/stack';
import ContentMessage from '../screen/ContentMessage';
import Contact from '../screen/Contact';
let StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Message} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Content" component={ContentMessage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
