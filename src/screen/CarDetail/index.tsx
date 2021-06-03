import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
import {CarListing} from '../../component/CarDetail/CarsListing';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {CarDetailStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const CarDetail: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderContainer title="Car Detail" />
      <View style={{flex: 1}}>
        <CarListing />
      </View>
      <View style={CarDetailStyle.addCarConatiner}>
        <Button
          onPress={() => navigation.navigate('AddCar')}
          title="Add Car"
          containerStyle={{
            width:'60%'
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
