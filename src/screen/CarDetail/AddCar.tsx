import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
import {CarDrp} from '../../component/CarDetail/CarDrp';
import {VehicleFuel, VehicleType} from '../../component/CarDetail/CarDrpData';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {TextInput} from '../../component/TextInput';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const AddCar: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderContainer />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '50%',
            height: 80,
          }}>
          <Image
            source={require('../../assets/images/car.png')}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontFamily: 'Segoe UI Semibold',
            color: '#0E5A93',
          }}>
          Add Car
        </Text>
      </View>
      <View style={{flex: 1, margin: 10}}>
        <TextInput placeholder="Car number" label="Car Number" />
        <TextInput placeholder="License number" label="License Number" />
        <View
          style={{
            zIndex: 999,
          }}>
          <CarDrp
            items={VehicleType}
            placeholder="Vehicle Type"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
        </View>
        <View
          style={{
            zIndex: 888,
          }}>
          <CarDrp
            items={VehicleFuel}
            placeholder="Vehicle Fuel"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
        </View>
        <View
          style={{
            zIndex: 777,
          }}>
          <CarDrp
            items={VehicleFuel}
            placeholder="Maker"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
        </View>
        <View
          style={{
            zIndex: 666,
          }}>
          <CarDrp
            items={VehicleFuel}
            placeholder="Model Number"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
        </View>
        <TextInput placeholder="MFG Year" label="MFG Year" />
        <Button
          title="Add Car"
          buttonStyle={{
            marginTop: 15,
            borderRadius: 10,
            borderWidth: 2,
          }}
          titleStyle={{
            fontWeight: '700',
            fontFamily: 'Segoe UI',
          }}
        />
      </View>
    </View>
  );
};
