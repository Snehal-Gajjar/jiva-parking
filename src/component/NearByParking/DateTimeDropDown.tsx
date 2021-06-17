import {Picker} from '@react-native-picker/picker';
import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';

type Props = {
  items?: {label: string; value: string}[];
  defaultValue?: string;
  onChangeItem: (item: string) => void;
};

export const DateTimeDrp: FC<Props> = ({
  items,
  defaultValue,
  onChangeItem,
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 40,
        width: '40%',
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: '#065591',
        borderRadius: 10,
        margin: 5,
      }}>
      <Picker
        selectedValue={defaultValue}
        onValueChange={(item) => onChangeItem(item)}
        style={{
          fontSize: 12,
        }}
        mode="dropdown">
        {items
          ? items.map((val) => (
              <Picker.Item label={val.label} value={val.value} />
            ))
          : children}
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
