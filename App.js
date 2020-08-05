/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import storage from './src/redux/store';
let {store, persistor} = storage;
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './src/navigation/RootNavigation';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          style={{
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          }}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
