import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '@env';
import {UrlTile} from 'react-native-maps';
import {register} from '../redux/actions/auth';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';
import ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
let Register = (props) => {
  const navigation = useNavigation();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [image, setImage] = useState(null);
  let [spinner, setSpinner] = useState(false);
  let register = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      let formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('image', {
        name: image.fileName,
        uri: image.uri,
        type: image.type,
      });

      console.log(formdata);

      let url = BASE_URL;
      props
        .register(formdata, url)
        .then(() => {
          Alert.alert(
            'Success',
            'Login Success',
            [{text: 'OK', onPress: () => navigation.navigate('Home')}],
            {cancelable: false},
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  handleBrowseImage = () => {
    const options = {
      noData: true,
      title: 'Select Image',
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        setImage(response);
      }
    });
  };
  return (
    <ScrollView style={{height: '100%'}}>
      <View style={{height: 700}}>
        <ImageBackground
          imageStyle={{
            borderBottomLeftRadius: 160,
            borderBottomRightRadius: 160,
          }}
          style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          source={require('../img/imgHeader10.png')}>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 1, left: 220, top: 140}}
            onPress={() => handleBrowseImage()}>
            <Icon color="white" size={30} name="camera" />
          </TouchableOpacity>
          {image == null ? (
            <Image
              source={require('../img/avatar.png')}
              style={{
                top: 33,
                width: 90,
                height: 90,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ) : (
            <Image
              source={{
                uri: image.uri,
              }}
              style={{
                top: 33,
                width: 90,
                height: 90,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        </ImageBackground>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{marginRight: 20, top: -180, left: 12}}>
          <Icon color="white" size={30} name="arrow-left" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            top: -14,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Welcome !
        </Text>
        <Text style={{textAlign: 'center', top: -19}}>
          Sign Up for continue the procces
        </Text>
        <View
          style={{top: 40, marginLeft: 20, marginRight: 20, marginTop: -60}}>
          <View>
            <Icon
              style={{
                textAlign: 'right',
                top: 40,
                marginRight: 16,
                color: '#00ace6',
              }}
              name="user-o"
              size={30}
            />
            <TextInput
              style={{
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#00ace6',
                paddingHorizontal: 15,
              }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="input email"
            />
          </View>
          <View style={{marginTop: -24}}>
            <Icon
              name="key"
              size={30}
              color="#00ace6"
              style={{textAlign: 'right', top: 60, marginRight: 10}}
            />
            <TextInput
              secureTextEntry={true}
              style={{
                top: 19,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#00ace6',
                paddingHorizontal: 15,
              }}
              placeholder="input password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <Text
            onPress={() => navigation.navigate('Home')}
            style={{textAlign: 'right', top: 26, color: '#00ace6'}}>
            Have Account?
          </Text>
          <TouchableOpacity
            onPress={register}
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}>
            <ImageBackground
              style={{width: 180, height: 40}}
              imageStyle={{borderRadius: 40}}
              source={require('../img/imgHeader10.png')}>
              <Text
                style={{
                  color: 'white',
                  top: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Sign Up
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
  resRegister: state.register,
});
const mapDispatchToProp = {login, register};

export default connect(mapStateToProps, mapDispatchToProp)(Register);

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
