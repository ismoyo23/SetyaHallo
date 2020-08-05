import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';
import Register from '../screen/Register';
import StackNavigation from './StackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileNavigator from './ProfileNavigator';
import Login from '../screen/Login';
import Map from '../screen/Map';
const Stack = createStackNavigator();
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
let Tab = createMaterialBottomTabNavigator();

let RootNavigation = (props) => {
  console.log(props);
  if (props.resLogin.data.email == null) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        activeColor="#00ace6"
        inactiveColor="#ccccb3"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Message"
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({color}) => (
              <Icon name="whatsapp" color={color} size={26} />
            ),
          }}
          component={StackNavigation}
        />

        <Tab.Screen
          name="Maps"
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color}) => (
              <Icon name="map-marker" color={color} size={26} />
            ),
          }}
          component={Map}
        />

        <Tab.Screen
          name="Login"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon name="user-o" color={color} size={26} />
            ),
          }}
          component={ProfileNavigator}
        />
      </Tab.Navigator>
    );
  }
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(RootNavigation);
