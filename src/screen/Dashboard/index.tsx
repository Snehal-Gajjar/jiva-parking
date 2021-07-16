import React, {FC, useEffect, useState} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomCarousel} from '../../component/Dashboard/BottomCarousel';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {NavigationCard} from '../../component/Dashboard/NavigationCard';
import {DashboardStyle} from './styles';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import storage from '../../utils/storage';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Dashboard: FC<Props> = ({navigation}) => {
  const [latlong, setLatlong] = useState<{
    lat: number;
    long: number;
  }>({lat: 23.036406, long: 72.561066});

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    storage
      .load({
        key: 'latlong',
        autoSync: true,
        syncInBackground: true,
      })
      .then((res) => {
        const parsedneoUser = JSON.parse(res);
        console.log(parsedneoUser);
        setLatlong({
          lat: parsedneoUser.lat,
          long: parsedneoUser.long,
        });
      })
      .catch(() => {});
  }, []);

  const handleNavPress = (name: any) => {
    if (name === 'NearByParking') {
      navigation.navigate('NearByParking', {latlongdata: latlong});
    } else {
      navigation.navigate(name);
    }
  };

  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
      <View style={DashboardStyle.headerContainer}>
        <HeaderContainer {...{navigation}} />
        <View style={DashboardStyle.logoContainer}>
          <View style={DashboardStyle.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
              }}
            />
          </View>
          <Text style={DashboardStyle.logoTxt}>Parkaro</Text>
        </View>
      </View>
      <View style={DashboardStyle.detailContainer}>
        <Text style={DashboardStyle.dashboardTxt}>Dashboard</Text>
        <Text style={DashboardStyle.subDetailTxt}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </Text>
      </View>
      <NavigationCard {...{handleNavPress}} />
      <View>
        <Button
          title="Scan Car QR"
          buttonStyle={DashboardStyle.scanButtonStyle}
          titleStyle={{
            marginLeft: 10,
          }}
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('Scanning');
          }}
          icon={
            <Icon
              name="qrcode-scan"
              type="material-community"
              size={20}
              color="white"
            />
          }></Button>
      </View>
      <BottomCarousel />
    </ScrollView>
  );
};
