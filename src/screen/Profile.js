import React from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../redux/actions/auth';
import {connect} from 'react-redux';
let Profile = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{
          width: '100%',
          height: 140,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../img/imgHeader10.png')}>
        <TouchableOpacity
          onPress={() => props.logout()}
          style={{marginLeft: 'auto', marginRight: 20, top: 30}}>
          <Icon color="white" size={30} name="sign-in" />
        </TouchableOpacity>
        <Text
          style={{top: 30, color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Profile Users
        </Text>
        <Image
          style={{
            top: 37,
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
          source={require('../img/avatar.png')}
        />

        <Icon
          name="camera"
          color="#75a3a3"
          size={30}
          style={{marginLeft: 60}}
        />
      </ImageBackground>
      <View
        style={{
          top: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>hallo Ismoyo</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 100,

              zIndex: 1,
              top: -90,
              color: 'green',
            }}>
            .
          </Text>
          <Text>Online</Text>
        </View>
      </View>

      <View
        style={{
          top: -50,
          marginLeft: 30,
          marginRight: 30,
          backgroundColor: 'white',
          height: 300,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        }}>
        <View style={{top: 20}}>
          <View style={{left: 20, flexDirection: 'row'}}>
            <Icon name="key" style={{color: '#85adad'}} size={30} />
            <View style={{left: 12}}>
              <Text style={{fontSize: 20}}>Account</Text>
              <Text style={{color: '#94b8b8'}}>
                privacy, security, change number
              </Text>
            </View>
          </View>
        </View>
        <View style={{top: 35}}>
          <View style={{left: 20, flexDirection: 'row'}}>
            <Icon name="comments" style={{color: '#85adad'}} size={30} />
            <View style={{left: 12}}>
              <Text style={{fontSize: 20}}>Message</Text>
              <Text style={{color: '#94b8b8'}}>
                theme, walaper, chat history
              </Text>
            </View>
          </View>
        </View>
        <View style={{top: 44}}>
          <View style={{left: 20, flexDirection: 'row'}}>
            <Icon name="bell-o" style={{color: '#85adad'}} size={30} />
            <View style={{left: 12}}>
              <Text style={{fontSize: 20}}>Notofication</Text>
              <Text style={{color: '#94b8b8'}}>Message, Group</Text>
            </View>
          </View>
        </View>
        <View style={{top: 55}}>
          <View style={{left: 20, flexDirection: 'row'}}>
            <Icon name="hdd-o" style={{color: '#85adad'}} size={30} />
            <View style={{left: 12}}>
              <Text style={{fontSize: 20}}>Save Data</Text>
              <Text style={{color: '#94b8b8'}}>Message, Group</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  resLogin: state.logout,
});
const mapDispatchToProp = {logout};

export default connect(mapStateToProps, mapDispatchToProp)(Profile);
