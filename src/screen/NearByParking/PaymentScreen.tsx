import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {NearByParkingService} from '../../api/services';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {AmenitiesList} from '../../component/NearByParking/AmenitiesList';
import {CarDropDown} from '../../component/NearByParking/CarDropDown';
import {DetailContainer} from '../../component/NearByParking/DetailContainer';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {PaymentDetail} from '../../utils/types';
import {PaymentStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'PaymentScreen'>;
};

export const PaymentScreen: FC<Props> = ({navigation, route}) => {
  const {parking_id, for_time} = route.params;
  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail>();
  const [selectedCar, setSelectedCar] = useState<string>('GJ01');
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getPaymentDetail();
  }, []);

  const getPaymentDetail = () => {
    NearByParkingService.PaymentDetail({parking_id, for_time})
      .then((result) => setPaymentDetail(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <View style={{flex: 1}}>
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
          checked={paymentDetail?.is_vip === 0}
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
        <Button title="Pay Amount" buttonStyle={PaymentStyle.btnPick} />
      </View>
    </View>
  );
};
