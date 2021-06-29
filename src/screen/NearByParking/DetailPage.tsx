import React, {FC, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DetailContainer} from '../../component/NearByParking/DetailContainer';
import {DetailStyle} from './styles';
import {Button} from 'react-native-elements';
import {CarDropDown} from '../../component/NearByParking/CarDropDown';
import {ParkingTime} from '../../component/NearByParking/ParkingTime';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NearByParkingService} from '../../api/services';
import {NearByParkingDetail} from '../../utils/types';
import {toastShow} from '../../utils/Toast';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'DetailPage'>;
};

export const DetailPage: FC<Props> = ({navigation, route}) => {
  const {id, lat, long} = route.params;
  const [selectedCar, setSelectedCar] = useState<string>('GJ01');
  const [parkDetail, setParkDetail] = useState<NearByParkingDetail>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getParkDetail();
  }, []);

  const getParkDetail = () => {
    NearByParkingService.NearByParkingDetails({id, lat, long})
      .then((result) => setParkDetail(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:'white'
      }}>
      <HeaderContainer isMargin {...{navigation}} />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <DetailContainer data={parkDetail} />
        <View>
          <Text style={DetailStyle.titleStyle}>Parking Time</Text>
          <ParkingTime data={parkDetail ? parkDetail.prices : []} />
        </View>
        <View>
          <Text style={DetailStyle.titleStyle}>Info</Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
            <Text numberOfLines={4} style={DetailStyle.subDetail}>
              {parkDetail?.description}
            </Text>
            <Text>Read More</Text>
          </View>
        </View>
        <CarDropDown {...{setSelectedCar, selectedCar}} />
        <Button
          title="Pick Parking Slot"
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('MapScreen', {
              parking_id: parkDetail ? parkDetail.id : '',
            });
          }}
          buttonStyle={DetailStyle.btnPick}
        />
      </View>
    </ScrollView>
  );
};
