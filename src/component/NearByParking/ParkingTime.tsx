import React, {FC} from 'react';
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
  const handleSelection = (i: number) => {
    if (timePrice[i].selected) {
      timePrice[i].selected = false;
    } else {
      timePrice[i].selected = true;
    }
    timePrice = [...timePrice];
  };
  return (
    <View style={style.container}>
      <ScrollView horizontal={true}>
        {timePrice.map((item, i) => (
          <ListItem
            onPress={() => handleSelection(i)}
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
    marginTop: 15,
  },
  itemContainer: {
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    width: 120,
    height: 70,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  hourTitle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 18,
  },
  priceTitle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 18,
    color: '#a3a3a3',
  },
});
