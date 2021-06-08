import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {CarDrp} from '../../component/CarDetail/CarDrp';
import {VehicleFuel, VehicleType} from '../../component/CarDetail/CarDrpData';
import {CarNotificationAlert} from '../../component/CarDetail/CarNotificationAlert';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {TextInput} from '../../component/TextInput';
import {CarRootParamList} from '../../utils/NavigationTypes';

type Props = {
  navigation: DrawerNavigationProp<CarRootParamList>;
};

export const AddCar: FC<Props> = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeaderContainer {...{navigation}} />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '50%',
              height: 70,
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
          <CarDrp
            items={VehicleType}
            placeholder="Vehicle Type"
            defaultValue={'2'}
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
          <CarDrp
            items={VehicleFuel}
            defaultValue="CNG"
            placeholder="Vehicle Fuel"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
          <CarDrp
            items={VehicleFuel}
            placeholder="Maker"
            defaultValue="CNG"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
          <CarDrp
            items={VehicleFuel}
            placeholder="Model Number"
            defaultValue="CNG"
            onChangeItem={(data) => {
              console.log(data);
            }}
          />
          <TextInput placeholder="MFG Year" label="MFG Year" />
          <Button
            title="Add Car"
            buttonStyle={{
              marginTop: 15,
              borderRadius: 10,
              borderWidth: 2,
            }}
            onPress={handleClose}
            titleStyle={{
              fontWeight: '700',
              fontFamily: 'Segoe UI',
            }}
          />
        </View>
      </ScrollView>
      <CarNotificationAlert {...{visible, handleClose}} />
    </View>
  );
};
