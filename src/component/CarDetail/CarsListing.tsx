import React from 'react';
import {ScrollView, View} from 'react-native';
import {CarItem} from './CarItem';

const carData = [
  {
    id: '1',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9050',
  },
  {
    id: '2',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9051',
  },
  {
    id: '3',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9052',
  },
  {
    id: '4',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9053',
  },
  {
    id: '5',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9054',
  },
  {
    id: '5',
    carName: 'BMW i3',
    carNumber: 'GJ 01 UD 9054',
  },
];

export const CarListing = () => {
  return (
    <ScrollView>
      {carData.map((car) => (
        <CarItem data={car} />
      ))}
    </ScrollView>
  );
};
