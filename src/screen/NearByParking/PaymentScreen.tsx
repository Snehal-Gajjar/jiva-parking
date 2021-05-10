import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, CheckBox, Divider} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {AmenitiesList} from '../../component/NearByParking/AmenitiesList';
import {CarDropDown} from '../../component/NearByParking/CarDropDown';
import {DetailContainer} from '../../component/NearByParking/DetailContainer';
import {PaymentStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const PaymentScreen: FC<Props> = ({navigation}) => {
  const [selectedCar, setSelectedCar] = useState<string>('GJ01');
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderContainer isMargin />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <DetailContainer showService />
        <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            marginLeft: 10,
            borderColor: 'transparent',
            padding: 0,
            marginTop: 5,
          }}
          title="VIP Parking"
          checked
        />
        <View>
          <Text style={PaymentStyle.titleStyle}>Amenities</Text>
          <AmenitiesList />
        </View>
        <CarDropDown {...{setSelectedCar, selectedCar}} />
        <View>
          <Text style={PaymentStyle.titleStyle}>Payable Amount</Text>
          <View style={PaymentStyle.billContainer}>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Parking Charge</Text>
              <Text style={PaymentStyle.billPrice}>₹ 50</Text>
            </View>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Extra Facilities</Text>
              <Text style={PaymentStyle.billPrice}>₹ 05</Text>
            </View>
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Tax 2%</Text>
              <Text style={PaymentStyle.billPrice}>₹ 02</Text>
            </View>
            <Divider style={{backgroundColor: '#b3b3b3', marginTop: 5}} />
            <View style={PaymentStyle.billSubContainer}>
              <Text style={PaymentStyle.billTitles}>Total Pay</Text>
              <Text style={PaymentStyle.billPrice}>₹ 57</Text>
            </View>
          </View>
        </View>
        <Button
          title="Pay Amount"
          onPress={() => navigation.navigate('PaymentScreen')}
          buttonStyle={PaymentStyle.btnPick}
        />
      </View>
    </View>
  );
};
