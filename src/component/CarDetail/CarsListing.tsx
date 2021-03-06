import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {CarList} from '../../utils/types';
import {CarItem} from './CarItem';

type Props = {
  carData?: CarList[];
  navigation: StackNavigationProp<RootStackParamList>;
  getCars: () => void;
};

export const CarListing = ({carData, navigation, getCars}: Props) => {
  return (
    <ScrollView>
      {carData &&
        carData.map((car) => (
          <CarItem data={car} navigation={navigation} getCars={getCars} />
        ))}
    </ScrollView>
  );
};
