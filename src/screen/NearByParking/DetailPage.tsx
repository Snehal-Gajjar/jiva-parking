import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {RootStackParamList} from '../../../App';
import {DetailContainer} from '../../component/NearByParking/DetailContainer';
import {DetailStyle} from './styles';
import {Button} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import {CarDropDown} from '../../component/NearByParking/CarDropDown';
import {ParkingTime} from '../../component/NearByParking/ParkingTime';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const DetailPage: FC<Props> = ({navigation}) => {
  const [selectedCar, setSelectedCar] = useState<string>('GJ01');
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <HeaderContainer isMargin />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <DetailContainer />
        {/* <View>
          <CheckBox
            containerStyle={{
              backgroundColor: 'transparent',
              marginLeft: 0,
              borderColor: 'transparent',
              padding: 0,
            }}
            title="VIP Parking"
            checked={vipChecked}
            onPress={() => setvipChecked(!vipChecked)}
          />
          <Collapsible collapsed={!vipChecked}>
            <View>
              <Text style={DetailStyle.subDetail}>
                If you select vip you can access all the amenities such as cctv,
                security, insurance and car wash.
              </Text>
            </View>
          </Collapsible>
        </View>
         */}

        {/* <View>
          <Text style={DetailStyle.titleStyle}>Payable Amount</Text>
          <View style={DetailStyle.billContainer}>
            <View style={DetailStyle.billSubContainer}>
              <Text style={DetailStyle.billTitles}>Parking Charge</Text>
              <Text style={DetailStyle.billPrice}>₹ 50</Text>
            </View>
            <View style={DetailStyle.billSubContainer}>
              <Text style={DetailStyle.billTitles}>Extra Facilities</Text>
              <Text style={DetailStyle.billPrice}>₹ 05</Text>
            </View>
            <View style={DetailStyle.billSubContainer}>
              <Text style={DetailStyle.billTitles}>Tax 2%</Text>
              <Text style={DetailStyle.billPrice}>₹ 02</Text>
            </View>
            <Divider style={{backgroundColor: '#b3b3b3', marginTop: 5}} />
            <View style={DetailStyle.billSubContainer}>
              <Text style={DetailStyle.billTitles}>Total Pay</Text>
              <Text style={DetailStyle.billPrice}>₹ 57</Text>
            </View>
          </View>
        </View>
       */}
        <View>
          <Text style={DetailStyle.titleStyle}>Parking Time</Text>
          <ParkingTime />
        </View>
        <View>
          <Text style={DetailStyle.titleStyle}>Info</Text>
          <View
            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}>
            <Text numberOfLines={4} style={DetailStyle.subDetail}>
              24/7 parking facility with cctv camera, professional security
              gaurd, chair for disable,floor parking lift facilities. You will
              get hassle parkingfacilities with 35% cashback on first parking...
            </Text>
            <Text>Read More</Text>
          </View>
        </View>
        <CarDropDown {...{setSelectedCar, selectedCar}} />
        <Button title="Pick Parking Slot" onPress={() => navigation.navigate('MapScreen')} buttonStyle={DetailStyle.btnPick} />
      </View>
    </ScrollView>
  );
};
