import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {AuthService, NearByParkingService} from '../../api/services';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {AmenitiesList} from '../../component/NearByParking/AmenitiesList';
import {CarDropDown} from '../../component/NearByParking/CarDropDown';
import {DetailContainer} from '../../component/NearByParking/DetailContainer';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {PaymentDetail, ProfileUser} from '../../utils/types';
import {PaymentStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'PaymentScreen'>;
};

export const PaymentScreen: FC<Props> = ({navigation, route}) => {
  const {parking_id, for_time, is_vip, lat, long} = route.params;
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail>();
  const [selectedCar, setSelectedCar] = useState<string>('GJ01');
  const [user, setUser] = useState<ProfileUser>();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getPaymentDetail();
    getUser();
  }, []);

  const getPaymentDetail = () => {
    NearByParkingService.PaymentDetail({
      parking_id,
      for_time,
      is_vip,
      lat,
      long,
    })
      .then((result) => {
        console.log(result);
        setPaymentDetail(result.data);
      })
      .catch((err) => toastShow('error', err.message));
  };
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

  const handlePayAmount = () => {
    navigation.navigate('BookingPaymentScreen', {
      booking: {
        ...route.params,
        amount: paymentDetail?.total.toString() as string,
      },
      user: {
        wallet_amount: user ? user.wallet_amount : '0',
        name: user ? user.full_name : '',
        contact: user ? user.phone : '',
      },
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderContainer isMargin {...{navigation}} />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <DetailContainer showService data={paymentDetail?.parking_details} />
        <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            marginLeft: 10,
            borderColor: 'transparent',
            padding: 0,
            marginTop: 5,
          }}
          title="VIP Parking"
          checked={paymentDetail?.is_vip === 1}
        />
        <View>
          <Text style={PaymentStyle.titleStyle}>Amenities</Text>
          <AmenitiesList
            data={paymentDetail ? paymentDetail.parking_details.aminities : []}
          />
        </View>
        <CarDropDown {...{setSelectedCar, selectedCar}} />
        <View>
          <Text style={PaymentStyle.titleStyle}>Payable Amount</Text>
          <View style={PaymentStyle.billContainer}>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Parking Charge</Text>
              <Text style={PaymentStyle.billPrice}>
                ₹ {paymentDetail?.parking_charge}
              </Text>
            </View>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Extra Facilities</Text>
              <Text style={PaymentStyle.billPrice}>
                ₹ {paymentDetail?.extra_facilities}
              </Text>
            </View>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Tax 2%</Text>
              <Text style={PaymentStyle.billPrice}>₹ {paymentDetail?.tax}</Text>
            </View>
            <Divider style={{backgroundColor: '#b3b3b3', marginTop: 5}} />
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Total Pay</Text>
              <Text style={PaymentStyle.billPrice}>
                ₹ {paymentDetail?.total}
              </Text>
            </View>
          </View>
        </View>
        <Button
          title="Pay Amount"
          buttonStyle={PaymentStyle.btnPick}
          onPress={handlePayAmount}
        />
      </View>
    </View>
  );
};
