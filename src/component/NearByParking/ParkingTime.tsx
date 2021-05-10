import React, {FC, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';

let timePrice = [
  {
    hour: '1',
    price: 50,
    selected: false,
  },
  {
    hour: '2',
    price: 100,
    selected: true,
  },
  {
    hour: '3',
    price: 150,
    selected: false,
  },
  {
    hour: '4',
    price: 200,
    selected: false,
  },
];

export const ParkingTime: FC = () => {
  const [timePriceData, setTimePrice] = useState(timePrice);
  const handleSelection = (i: {
    hour: string;
    price: number;
    selected: boolean;
  }) => {
    timePriceData.map((val) => {
      if (val === i) {
        val.selected = true;
      } else {
        val.selected = false;
      }
    });
    setTimePrice([...timePriceData]);
  };
  return (
    <View style={style.container}>
      <ScrollView horizontal={true}>
        {timePriceData.map((item, i) => (
          <ListItem
            onPress={() => handleSelection(item)}
            containerStyle={[
              style.itemContainer,
              {backgroundColor: item.selected ? '#0E5A93' : 'transparent'},
            ]}>
            <Text
              style={[
                style.hourTitle,
                {color: item.selected ? '#fff' : '#0E5A93'},
              ]}>
              {item.hour + ' hour'}
            </Text>
            <Text style={[style.priceTitle]}>{'₹ ' + item.price}</Text>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  itemContainer: {
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    borderRadius: 15,
    padding: 5,
    marginRight: 10,
    width: 120,
    height: 60,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  hourTitle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 17,
  },
  priceTitle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 17,
    color: '#a3a3a3',
  },
});
