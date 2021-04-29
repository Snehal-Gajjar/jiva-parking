import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DetailPopUp} from '../../component/NearByParking/DetailPopUp';
import {NearByParkingStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const NearByParking: FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = () => {
    setVisible(!visible);
  };

  const hanldeBookNow = () => {
    navigation.navigate('DetailPage');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderContainer nearByParking />
      <View style={NearByParkingStyle.iconsContainer}>
        <Button
          raised
          buttonStyle={[
            NearByParkingStyle.iconButtonStyle,
            {backgroundColor: '#ffeaaf'},
          ]}
          icon={
            <Icon name="car-sport" color="#ffbc02" type="ionicon" size={26} />
          }
          containerStyle={NearByParkingStyle.iconContainer}></Button>
        <Button
          raised
          buttonStyle={[
            NearByParkingStyle.iconButtonStyle,
            {backgroundColor: '#ffccaf'},
          ]}
          icon={<Icon name="truck" color="#ff6804" type="fontisto" size={26} />}
          containerStyle={NearByParkingStyle.iconContainer}></Button>
        <Button
          raised
          buttonStyle={[
            NearByParkingStyle.iconButtonStyle,
            {backgroundColor: '#afc8ff'},
          ]}
          onPress={handleClose}
          icon={
            <Icon
              name="two-wheeler"
              color="#002cff"
              type="material"
              size={26}
            />
          }
          containerStyle={NearByParkingStyle.iconContainer}></Button>
      </View>
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <DetailPopUp {...{visible, handleClose, hanldeBookNow}} />
    </View>
  );
};
