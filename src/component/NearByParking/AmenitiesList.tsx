import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native-elements';
import {Amenities} from '../../utils/types';

type Props = {
  data: Amenities[];
};

export const AmenitiesList: FC<Props> = ({data}) => {
  return (
    <View style={style.container}>
      {data.map((val) => (
        <View style={style.item}>
          <Image
            style={style.itemImage}
            source={
              val.icon
                ? {uri: val.icon}
                : require('../../assets/images/parking-barrier.png')
            }
          />
          <Text style={style.itemText}>{val.title}</Text>
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  item: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 3,
  },
  itemText: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    marginLeft: 7,
  },
  itemImage: {
    width: 25,
    height: 25,
  },
});
