import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DetailPopUp} from '../../component/NearByParking/DetailPopUp';
import {FliterPopUp} from '../../component/NearByParking/FliterPopUp';
import {NearByParkingStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const NearByParking: FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(true);
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
            <Icon name="car-sport" color="#ffbc02" type="ionicon" size={20} />
          }
          containerStyle={NearByParkingStyle.iconContainer}></Button>
        <Button
          raised
          buttonStyle={[
            NearByParkingStyle.iconButtonStyle,
            {backgroundColor: '#ffccaf'},
          ]}
          icon={<Icon name="truck" color="#ff6804" type="fontisto" size={20} />}
          containerStyle={NearByParkingStyle.iconContainer}></Button>
        <Button
          raised
          buttonStyle={[
            NearByParkingStyle.iconButtonStyle,
            {backgroundColor: '#afc8ff'},
          ]}
          icon={
            <Icon
              name="two-wheeler"
              color="#002cff"
              type="material"
              size={20}
            />
          }
          containerStyle={NearByParkingStyle.iconContainer}></Button>
      </View>
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 23.0195,
            longitude: 72.5922,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onMarkerPress={() => {
            handleClose();
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}>
          <Marker
            title={'Raypur Praking'}
            image={require('../../assets/images/logo_blur.png')}
            coordinate={{latitude: 23.0195, longitude: 72.5922}}
            onPress={(e) => {
              e.stopPropagation();
            }}></Marker>
        </MapView>
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
