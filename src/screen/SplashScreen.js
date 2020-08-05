import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let SplashScreen = () => {
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../img/imgHeader10.png')}>
        <Icon
          name="commenting-o"
          size={100}
          style={{color: 'white', textAlign: 'center', top: 190}}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 200,
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Setya Message
        </Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
