import React, {FC} from 'react';
import {View} from 'react-native';
import {NavigationButton} from './NavigationButton';

export const NavigationCard: FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
        marginHorizontal:30,
        alignItems:'baseline'
      }}>
      <NavigationButton
        image={require('../../assets/images/parking.png')}
        title="Near By Parking"
      />
      <NavigationButton
        image={require('../../assets/images/digitalWallet.png')}
        title="Wallet"
      />
      <NavigationButton
        image={require('../../assets/images/check.png')}
        title="Car Details"
      />
    </View>
  );
};
