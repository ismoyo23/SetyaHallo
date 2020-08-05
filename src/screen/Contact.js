import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {login} from '../redux/actions/auth';
import {BASE_URL} from '@env';
import {FriendList} from '../redux/actions/FriendList';
import {addFriend} from '../redux/actions/FriendList';
import {getUser} from '../redux/actions/auth';
let Contact = (props) => {
  let navigation = useNavigation();
  let [modalVisible, setModalVisible] = useState(false);
  let [searchUsers, setSearchUsers] = useState('');
  let [idUser] = useState(props.resLogin.data.id);
  React.useEffect(() => {
    const reloadPage = navigation.addListener('focus', () => {
      ListFriend();
    });

    return reloadPage;
  }, [navigation]);

  let ListFriend = () => {
    let data = {
      field: '&field=f.id_receiver',
      params:
        props.resLogin.data.id == undefined
          ? ''
          : `?search=${props.resLogin.data.id}`,
      url: BASE_URL,
    };
    props.FriendList(data);
  };

  let searchEmail = () => {
    let data = {
      url: BASE_URL,
      params: `?search=${searchUsers}`,
    };

    props.getUser(data).then((props) => {
      if (props.value.data.data[0] == null) {
        Alert.alert(
          'Sorry',
          'Email not found',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }
    });
  };

  let submitFriend = (id) => {
    let data = {
      id_receiver: idUser,
      id_sender: id,
      url: BASE_URL,
    };
    props
      .addFriend(data)
      .then(() => {
        alert('success');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                onChangeText={(text) => setSearchUsers(text)}
                value={searchUsers}
                style={{
                  width: 220,
                  borderWidth: 3,
                  borderColor: 'gray',
                  height: 40,
                  top: 2,
                  borderRadius: 30,
                }}
                placeholder=" Input Email"
              />
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: '#2196F3',
                  marginLeft: 10,
                }}
                onPress={() => {
                  searchEmail();
                }}>
                <Icon name="search" size={21} color="white" />
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: 'red',
                  marginLeft: 8,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
            <ScrollView style={{marginTop: 30, height: 200, width: 350}}>
              {props.dataUser.data.map((data) => {
                return (
                  <View
                    style={{
                      width: 301,
                      height: 80,
                      borderRadius: 10,
                      zIndex: 2,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'row', width: 300}}>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          marginLeft: 11,
                          marginTop: 4,
                        }}
                        source={require('../img/avatar.png')}
                      />
                      <View style={{width: 200}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            top: 3,
                            marginLeft: 7,
                          }}>
                          {data.email}
                        </Text>
                        <Text style={{marginLeft: 7, marginTop: 6}}>
                          Sun, 20 jun 2020
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => submitFriend(data.id)}
                        style={{
                          left: 6,
                          backgroundColor: '#2196F3',
                          marginLeft: 12,
                          height: 40,
                          width: 50,
                          borderRadius: 100,
                        }}>
                        <Icon
                          style={{textAlign: 'center', top: 9}}
                          name="plus"
                          color="white"
                          size={23}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <ImageBackground
        source={require('../img/imgHeader10.png')}
        style={{width: '100%', height: 70}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            style={{
              zIndex: 1,
              position: 'absolute',
              color: 'white',
              top: 23,
              fontSize: 20,
              left: 12,
            }}></Icon>
        </TouchableOpacity>
        <View style={{marginLeft: 30, marginRight: 30}}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
              left: 11,
            }}>
            Contact
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
          {props.Contactlist.data.map((data) => {
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
                    lorem message ipsun data
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
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
            name="plus"
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
  Contactlist: state.FriendList,
  dataUser: state.searchFriend,
});
const mapDispatchToProp = {login, FriendList, addFriend, getUser};

export default connect(mapStateToProps, mapDispatchToProp)(Contact);

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  modalView: {
    height: 217,
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
