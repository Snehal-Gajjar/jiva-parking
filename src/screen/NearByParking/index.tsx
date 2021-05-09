import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DetailPopUp} from '../../component/NearByParking/DetailPopUp';
import {FliterPopUp} from '../../component/NearByParking/FliterPopUp';
import {NearByParkingStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const NearByParking: FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  const handleClose = (type?: string) => {
    if (type === 'filter') {
      setFilterVisible(!filterVisible);
    } else {
      setVisible(!visible);
    }
  };

  const hanldeBookNow = () => {
    navigation.navigate('DetailPage');
  };

  const handleFilter = () => {
    handleClose('filter');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <HeaderContainer nearByParking {...{handleFilter}} />
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
          onPress={() => handleClose()}
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
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}></MapView>
      </View>
      <DetailPopUp
        {...{visible, hanldeBookNow}}
        handleClose={() => handleClose()}
      />
      <FliterPopUp
        visible={filterVisible}
        handleClose={() => handleClose('filter')}
      />
    </View>
  );
};
