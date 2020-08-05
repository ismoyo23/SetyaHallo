import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
let ContentMessage = () => {
  let navigation = useNavigation();
  return (
    <View>
      <View style={{backgroundColor: '#00ace6', width: '100%', height: 70}}>
        <View style={{marginRight: 20, marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="arrow-left"
              size={30}
              style={{top: 18}}
              color="#e0e0d1"
            />
          </TouchableOpacity>
          <View style={{top: 10, left: 12}}>
            <Text style={{color: 'white', fontSize: 20}}>Tara</Text>
            <Text style={{color: 'white'}}>online</Text>
          </View>
          <Image
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
              marginLeft: 'auto',
              top: 9,
            }}
            source={require('../img/avatar.png')}
          />
        </View>
      </View>
      <ScrollView style={{marginTop: 30}}>
        <View style={{height: 900}}>
          <View
            style={{
              backgroundColor: '#00ace6',
              height: 40,
              marginRight: 'auto',
              borderRadius: 30,
              left: 10,
            }}>
            <Text style={{color: 'white', top: 10, left: 13, marginRight: 30}}>
              Hallo sayang
            </Text>
          </View>

          <View
            style={{
              top: 12,
              backgroundColor: 'white',
              height: 40,

              borderRadius: 30,
              marginLeft: 'auto',
            }}>
            <Text
              style={{
                color: 'black',
                top: 10,
                marginLeft: 'auto',
                marginRight: 12,
                marginLeft: 12,
              }}>
              Iya Kenapa?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContentMessage;
