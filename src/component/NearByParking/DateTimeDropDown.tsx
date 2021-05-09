import React, {FC} from 'react';
import {View} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

type Props = {
  items: {label: string; value: string}[];
  defaultValue: string;
  onChangeItem: (item: ItemType) => void;
};

export const DateTimeDrp: FC<Props> = ({items, defaultValue, onChangeItem}) => {
  return (
    <View
      style={{
        zIndex: 999,
      }}>
      <DropDownPicker
        items={items}
        defaultValue={defaultValue}
        containerStyle={{
          height: 40,
          marginTop: 10,
        }}
        style={{
          backgroundColor: '#fff',
          width: 125,
          borderWidth: 1,
          borderRadius: 20,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}
        zIndex={999}
        zIndexInverse={6000}
        dropDownStyle={{backgroundColor: '#fff'}}
        onChangeItem={onChangeItem}
      />
    </View>
  );
};
