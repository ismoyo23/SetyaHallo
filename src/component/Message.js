import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';
import {BASE_URL} from '@env';
import {History} from '../redux/actions/history';
let Message = (props) => {
  console.log(props);
  let navigation = useNavigation();

  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      Messanger();
    });

    return reloadPage;
  }, [navigation]);

  let Messanger = () => {
    let data = {
      params:
        props.resLogin.data.id == undefined
          ? ''
          : `?search=${props.resLogin.data.id}`,
      url: BASE_URL,
    };
    props.History(data);
  };
  return (
    <View>
      <ImageBackground
        source={require('../img/imgHeader10.png')}
        style={{width: '100%', height: 70}}>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
            }}>
            Setya Messanger
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 2,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        }}>
        <ScrollView style={styles.Card}>
          {props.HistoryList.data.map((data) => {
            return (
              <View style={styles.List}>
                <Image
                  style={{borderRadius: 200, width: 60, height: 60}}
                  source={require('../img/avatar.png')}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Content')}>
                  <Text style={{left: 12, fontSize: 20, top: 5}}>
                    {data.email}
                  </Text>
                  <Text style={{left: 12, fontSize: 13, marginTop: 5}}>
                    {data.message}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={{
            zIndex: 3,
            backgroundColor: '#00ace6',
            width: 60,
            height: 60,
            position: 'absolute',
            top: '83%',
            borderRadius: 100,
            left: '80%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Icon
            name="address-book"
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 30,
              top: 15,
            }}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.auth,
  HistoryList: state.History,
});
const mapDispatchToProp = {login, History};

export default connect(mapStateToProps, mapDispatchToProp)(Message);

let styles = StyleSheet.create({
  Card: {
    marginTop: -13,
    backgroundColor: 'white',
    height: '90%',
  },
  List: {
    flexDirection: 'row',
    marginTop: 20,
    left: 20,
  },
});
