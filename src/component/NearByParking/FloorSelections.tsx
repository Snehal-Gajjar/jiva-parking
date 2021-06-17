import React, {FC, useEffect, useState} from 'react';
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

type Props = {
  floors: string[];
};

export const FloorSelections: FC<Props> = ({floors}) => {
  const [floorData, setFloorData] = useState<
    {floor: string; selected: boolean}[]
  >([]);
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

  useEffect(() => {
    const changeData = floors.map((obj, index) => {
      if (index === 0) {
        return {floor: obj, selected: true};
      }
      return {floor: obj, selected: false};
    });
    setFloorData(changeData);
  }, [floors]);

  return (
    <View style={style.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        {floorData.map((item, i) => (
          <ListItem
            onPress={(e) => {
              e.preventDefault();
              handleSelection(item);
            }}
            underlayColor="transparent"
            containerStyle={[
              style.itemContainer,
              {backgroundColor: item.selected ? '#0E5A93' : '#ffffff'},
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    justifyContent: 'center',
  },
  hourTitle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 17,
  },
});
