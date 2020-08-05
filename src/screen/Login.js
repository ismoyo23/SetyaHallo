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
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';
import {BASE_URL} from '@env';
import Spinner from 'react-native-loading-spinner-overlay';
let Login = (props) => {
  console.log(BASE_URL);
  console.log(props);
  const navigation = useNavigation();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [spinner, setSpinner] = useState(false);
  let login = () => {
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      let data = {
        url: BASE_URL,
        email: email,
        password: password,
      };
      props
        .login(data)
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
  return (
    <ScrollView>
      <View style={{height: 600}}>
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
            onPress={() => navigation.navigate('Profile')}
            style={{marginLeft: '-87%', top: -17}}></TouchableOpacity>
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
        </ImageBackground>

        <Text
          style={{
            textAlign: 'center',
            top: 12,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Welcome !
        </Text>
        <Text style={{textAlign: 'center', top: 12}}>
          Sign In for continue the procces
        </Text>
        <View
          style={{top: 40, marginLeft: 20, marginRight: 20, marginTop: -24}}>
          <View>
            <Icon
              style={{
                textAlign: 'right',
                top: 40,
                marginRight: 16,
                color: '#00ace6',
              }}
              name="envelope-o"
              size={30}
            />
            <TextInput
              style={{
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#00ace6',
                paddingHorizontal: 15,
              }}
              placeholder="input Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
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
            onPress={() => navigation.navigate('Register')}
            style={{textAlign: 'right', top: 26, color: '#00ace6'}}>
            Not have Account?
          </Text>

          <TouchableOpacity
            onPress={login}
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
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
                Sign In
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
});
const mapDispatchToProp = {login};

export default connect(mapStateToProps, mapDispatchToProp)(Login);

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
