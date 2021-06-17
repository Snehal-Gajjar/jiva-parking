import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import { BookingHistoryData } from '../../utils/types';

type Props = {
  data: BookingHistoryData;
};

export const BookingItem = ({data}: Props) => {
  return (
    <Card containerStyle={style.cardContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <View style={style.titlecontainer}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Segoe UI Semibold',
              fontSize: 17,
            }}>
            {data.place}
          </Text>
          <Text
            style={{color: '#8294ad', fontFamily: 'Segoe UI', fontSize: 15}}>
            {data.for_date}
          </Text>
        </View>
        {/* <View> */}
          <Text
            style={{
              color: 'green',
              fontFamily: 'Segoe UI Semibold',
              fontSize: 17,
            }}>
            {data.amount}
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
    width: '90%'
  },
});
