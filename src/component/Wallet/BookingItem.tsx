import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {BookingHistoryData, WalletHistoryData} from '../../utils/types';

type Props = {
  bookingdata?: BookingHistoryData;
  walletData?: WalletHistoryData;
  type: 'Booking' | 'Wallet';
};

export const BookingItem = ({walletData, bookingdata, type}: Props) => {
  const isWallet = type === 'Wallet';
  return (
    <Card containerStyle={style.cardContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={style.titlecontainer}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Segoe UI Semibold',
              fontSize: 17,
            }}>
            {isWallet ? walletData?.title : bookingdata?.place}
          </Text>
          <Text
            style={{color: '#8294ad', fontFamily: 'Segoe UI', fontSize: 15}}>
            {isWallet
              ? moment(walletData?.date).format('hh:mm a, DD MMM YYYY')
              : moment(bookingdata?.date).format('hh:mm a, DD MMM YYYY')}
          </Text>
        </View>
        {/* <View> */}
        <Text
          style={{
            color: isWallet
              ? walletData?.status === 'success'
                ? 'green'
                : 'red'
              : bookingdata?.status === 'success'
              ? 'green'
              : 'red',
            fontFamily: 'Segoe UI Semibold',
            fontSize: 17,
          }}>
          {isWallet ? '₹' + walletData?.amount : '₹' + bookingdata?.amount}
        </Text>
        {/* </View> */}
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titlecontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
});
