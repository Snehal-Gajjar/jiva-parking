import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

type Props = {
  items: ItemType[];
  defaultValue?: string;
  onChangeItem: (item: ItemType) => void;
  placeholder:string
};

export const CarDrp: FC<Props> = ({items, defaultValue, onChangeItem, placeholder}) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.labelStyle}>{placeholder}</Text>
      <DropDownPicker
        items={items}
        defaultValue={defaultValue}
        containerStyle={{
          marginTop: 0,
          height: 35,
        }}
        placeholder={placeholder}
        style={{
          backgroundColor: '#fff',
          width: '100%',
          borderWidth: 0,
          borderRadius: 20,
        }}
        selectedLabelStyle={{
          color: '#8193ae',
          fontFamily: 'Segoe UI',
          fontSize: 17,
        }}
        placeholderStyle={{
          color: '#8193ae',
          fontFamily: 'Segoe UI',
          fontSize: 17,
        }}
        labelStyle={{
          fontFamily: 'Segoe UI',
          fontSize: 17,
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

const style = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 60,
    padding: 7,
    marginTop: 10,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  labelStyle: {
    color: '#000',
    fontFamily: 'Segoe UI',
    fontWeight: '500',
    marginBottom: 0,
    marginLeft: 10,
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
