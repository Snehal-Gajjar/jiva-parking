import React, {FC, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';

let floors = [
  {
    floor: 'G',
    selected: true,
  },
  {
    floor: 'F1',
    selected: false,
  },
  {
    floor: 'F2',
    selected: false,
  },
  {
    floor: 'F3',
    selected: false,
  },
  {
    floor: 'F4',
    selected: false,
  },
];

export const FloorSelections: FC = () => {
  const [floorData, setFloorData] = useState(floors);
  const handleSelection = (i: {floor: string; selected: boolean}) => {
    floorData.map((val) => {
      if (val === i) {
        val.selected = true;
      } else {
        val.selected = false;
      }
    });
    setFloorData([...floorData]);
  };
  return (
    <View style={style.container}>
      <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        {floorData.map((item, i) => (
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
              {item.floor}
            </Text>
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
    marginTop: 5,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  itemContainer: {
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
  },
  hourTitle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 17,
  },
});
