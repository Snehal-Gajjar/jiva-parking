import {Picker} from '@react-native-picker/picker';
import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

type Props = {
  items: {label: string; value: string}[];
  defaultValue: string;
  onChangeItem: (item: string) => void;
};

export const DateTimeDrp: FC<Props> = ({items, defaultValue, onChangeItem}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 40,
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#065591',
        borderRadius: 10,
        margin: 5,
      }}>
      <Picker
        selectedValue={defaultValue}
        onValueChange={(item) => onChangeItem(item)}
        renderToHardwareTextureAndroid
        style={{
          fontSize: 12,
        }}
        itemStyle={{
          textAlign: 'center',
        }}
        mode="dropdown">
        {items.map((val) => (
          <Picker.Item label={val.label} value={val.value} />
        ))}
      </Picker>
      {/* <DropDownPicker
        items={items}
        defaultValue={defaultValue}
        containerStyle={{
          height: 40,
        }}
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 20,
          margin:10
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}
        zIndex={999}
        zIndexInverse={6000}
        dropDownStyle={{backgroundColor: '#fff'}}
        onChangeItem={onChangeItem}
      /> */}
    </View>
  );
};
