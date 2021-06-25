import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {AuthService} from '../../api/services';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {WalletCard} from '../../component/common/WalletCard';
import {NavigationList} from '../../component/Profile/NavigationList';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {ProfileUser} from '../../utils/types';
import {ProfileStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Profile: FC<Props> = ({navigation}) => {
  const [user, setUser] = useState<ProfileUser>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getUser();
  }, []);

  const getUser = () => {
    AuthService.Profile()
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
        toastShow('error', err.message);
      });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderContainer {...{navigation}} isProfile />
      <View style={ProfileStyle.profileContianer}>
        <Text style={ProfileStyle.profiletitle}>Profile</Text>
        <View style={ProfileStyle.profileImage}>
          <Image
            source={
              user ? user.photo : require('../../assets/images/avatar.png')
            }
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 30,
            }}
          />
        </View>
        <Text style={ProfileStyle.phoneTxt}>{user && user.full_name}</Text>
        <Text style={ProfileStyle.phoneTxt}>{user && user.phone}</Text>
      </View>
      <View style={{margin: 15}}>
        <WalletCard />
      </View>
      <View style={ProfileStyle.mainiconcontainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={ProfileStyle.iconContianer}
          onPress={() => navigation.navigate('BookingHistory')}>
          <View style={ProfileStyle.iconCircle}>
            <Icon
              name="ticket-confirmation-outline"
              size={25}
              type="material-community"
              color="#065591"
            />
          </View>
          <Text style={ProfileStyle.title}>My booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={ProfileStyle.iconContianer}
          onPress={() => navigation.navigate('Notification')}>
          <View style={ProfileStyle.iconCircle}>
            <Icon
              name="notifications-outline"
              size={25}
              type="ionicon"
              color="#065591"
            />
          </View>
          <Text style={ProfileStyle.title}>Notification</Text>
        </TouchableOpacity>
      </View>
      <View>
        <NavigationList />
      </View>
    </ScrollView>
  );
};
