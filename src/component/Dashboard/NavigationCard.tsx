import React, {FC} from 'react';
import {View} from 'react-native';
import {NavigationButton} from './NavigationButton';

type Props = {
  handleNavPress: (name: string) => void;
};

export const NavigationCard: FC<Props> = ({handleNavPress}) => {
  const handlePress = (name: string) => {
    switch (name) {
      case 'NearByParking':
        handleNavPress(name);
        break;
      case 'Wallet':
        handleNavPress(name);
        break;
      case 'CarDetail':
        handleNavPress(name);
        break;
      default:
        break;
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 30,
        alignItems: 'baseline',
      }}>
      <NavigationButton
        image={require('../../assets/images/parking.png')}
        title="Near By Parking"
        onPress={(e) => {
          e.preventDefault();
          handlePress('NearByParking');
        }}
      />
      <NavigationButton
        image={require('../../assets/images/digitalWallet.png')}
        title="Wallet"
        onPress={(e) => {
          e.preventDefault();
          handlePress('Wallet');
        }}
      />
      <NavigationButton
        image={require('../../assets/images/check.png')}
        title="Car Details"
        onPress={(e) => {
          e.preventDefault();
          handlePress('CarDetail');
        }}
      />
    </View>
  );
};
