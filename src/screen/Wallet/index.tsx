import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {WalletCard} from '../../component/common/WalletCard';
import {BookingHistory} from '../../component/Wallet/BookingHistory';
import {RootStackParamList} from '../../utils/NavigationTypes';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Wallet: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderContainer title="Car Detail" {...{navigation}} />
      <View style={{margin: 15}}>
        <WalletCard />
      </View>
      <View style={{marginLeft: 15}}>
        <Text style={{color: '#000', fontFamily: 'Segoe UI', fontSize: 16}}>
          History of Bookings
        </Text>
      </View>
      <BookingHistory />
    </View>
  );
};
