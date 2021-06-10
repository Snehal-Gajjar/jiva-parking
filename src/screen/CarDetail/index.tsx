import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {CarService} from '../../api/services';
import {CarListing} from '../../component/CarDetail/CarsListing';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {CarList} from '../../utils/types';
import {CarDetailStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const CarDetail: FC<Props> = ({navigation}) => {
  const [car, setCars] = useState<CarList[]>();
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getCars();
  }, [car]);

  const getCars = () => {
    setloading(true);
    CarService.getCars()
      .then((result) => {
        setloading(false);
        setCars(result.data);
      })
      .catch((error) => {
        console.log(error);
        toastShow('error', error.message);
      });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderContainer title="Car Detail" {...{navigation}} />
      <View style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0E5A93" />
        ) : car && car.length > 0 ? (
          <CarListing carData={car} navigation={navigation} />
        ) : (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: 'Segoe UI',
                fontSize: 17,
                color: '#8294ad',
              }}>{`No Cars found. Please add new car`}</Text>
          </View>
        )}
      </View>
      <View style={CarDetailStyle.addCarConatiner}>
        <Button
          onPress={() =>
            navigation.navigate('AddCar', {edit: false, carDetail: {}})
          }
          title="Add Car"
          containerStyle={{
            width: '60%',
          }}
          buttonStyle={CarDetailStyle.addCarBtn}
          titleStyle={{
            fontSize: 15,
            fontWeight: '500',
          }}></Button>
      </View>
    </View>
  );
};
