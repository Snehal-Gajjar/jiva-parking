import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DetailPopUp} from '../../component/NearByParking/DetailPopUp';
import {FliterPopUp} from '../../component/NearByParking/FliterPopUp';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {NearByParkingStyle} from './styles';
import Geolocation from '@react-native-community/geolocation';
import {NearByParkingService} from '../../api/services';
import {MarkerData} from '../../utils/types';
import {toastShow} from '../../utils/Toast';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const NearByParking: FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [markerD, setMarkerD] = useState<MarkerData>();
  const [latlong, setLatlong] = useState<{
    lat: number;
    long: number;
  }>({lat: 23.036406, long: 72.561066});

  const {lat, long} = latlong;

  const handleClose = (type?: string) => {
    if (type === 'filter') {
      setFilterVisible(!filterVisible);
    } else {
      setVisible(!visible);
    }
  };

  const handleSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const hanldeBookNow = (data?: MarkerData) => {
    if (data) {
      navigation.navigate('DetailPage', {
        id: data.id,
        lat: data.latitude,
        long: data.longitude,
      });
    }
    handleClose();
  };

  const handleFilter = () => {
    handleClose('filter');
  };

  const handleFilterEvent = (
    checkedId: string,
    roof: 'open' | 'close',
    use: 'personal' | 'event',
  ) => {
    getNearByParking(search, checkedId, roof, use);
    handleClose('filter');
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    Geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        setLatlong({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        getNearByParking();
        console.log(initialPosition);
      },
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    getNearByParking();
  }, []);

  useEffect(() => {
    //test
  }, [markers, latlong]);

  const getNearByParking = (
    search?: string,
    checkedId?: string,
    roof?: 'open' | 'close',
    use?: 'personal' | 'event',
  ) => {
    NearByParkingService.NearByParking({
      lat: lat.toString(),
      long: long.toString(),
      search,
      aminity_ids: checkedId,
      top: roof,
      use,
    })
      .then((result) => setMarkers(result.data))
      .catch((err) => {
        console.log(err);
        toastShow('error', err.message);
      });
  };

  const handleSearchBtn = () => {
    getNearByParking(search);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderContainer
        nearByParking
        {...{handleFilter, navigation, handleSearch, handleSearchBtn}}
      />
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
          zoomEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: 23.0195,
            longitude: 72.5922,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onMarkerPress={(e) => {
            console.log(e.nativeEvent.id);
            // handleClose();
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}>
          {markers.map((marker) => (
            <Marker
              title={marker.place}
              image={require('../../assets/images/logo_blur.png')}
              coordinate={{
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              }}
              onPress={(e) => {
                e.stopPropagation();
                setMarkerD(marker);
                // handleClose();
                setVisible(true);
              }}></Marker>
          ))}
        </MapView>
      </View>
      <DetailPopUp
        {...{visible, hanldeBookNow}}
        data={markerD}
        handleClose={() => handleClose()}
      />
      <FliterPopUp
        visible={filterVisible}
        handleClose={() => handleClose('filter')}
        handleFilterEvent={handleFilterEvent}
      />
    </View>
  );
};
