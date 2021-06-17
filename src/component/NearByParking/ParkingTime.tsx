import moment from 'moment';
import React, {FC, useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Price} from '../../utils/types';

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

type Props = {
  data: Price[];
};

export const ParkingTime: FC<Props> = ({data}) => {
  const [timePriceData, setTimePrice] = useState<
    {
      selected: boolean;
      id: string;
      parking_id: string;
      time: number;
      cost: string;
    }[]
  >([]);

  useEffect(() => {
    const changeData = data.map((obj, index) => {
      if (index === 0) {
        return {...obj, selected: true};
      }
      return {...obj, selected: false};
    });
    setTimePrice(changeData);
  }, [data]);

  const handleSelection = (i: {
    selected: boolean;
    id: string;
    parking_id: string;
    time: number;
    cost: string;
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
            onPress={(e) => {
              e.preventDefault();
              handleSelection(item);
            }}
            underlayColor="transparent"
            activeOpacity={1}
            containerStyle={[
              style.itemContainer,
              {backgroundColor: item.selected ? '#0E5A93' : '#ffffff'},
            ]}>
            <Text
              style={[
                style.hourTitle,
                {color: item.selected ? '#fff' : '#0E5A93'},
              ]}>
              {moment
                .utc(moment.duration(item.time, 'minute').asMilliseconds())
                .format('H') + ' hour'}
            </Text>
            <Text style={[style.priceTitle]}>{'₹ ' + item.cost}</Text>
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
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  hourTitle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 17,
  },
  priceTitle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 17,
    color: '#a3a3a3',
  },
});
