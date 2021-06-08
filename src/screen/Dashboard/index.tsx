import React, {FC, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomCarousel} from '../../component/Dashboard/BottomCarousel';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {NavigationCard} from '../../component/Dashboard/NavigationCard';
import {DashboardStyle} from './styles';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../utils/NavigationTypes';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList>;
};

export const Dashboard: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleNavPress = (name: any) => {
    navigation.navigate(name);
  };

  return (
    <View style={{flex: 1}}>
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
          onPress={() => navigation.navigate('Scanning')}
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
    </View>
  );
};
