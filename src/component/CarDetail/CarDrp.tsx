import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

const Item: any = Picker.Item;

type Props = {
  items?: ItemType[];
  defaultValue?: string;
  onChangeItem: (item: string) => void;
  placeholder: string;
};

export const CarDrp: FC<Props> = ({
  items,
  defaultValue,
  onChangeItem,
  placeholder,
  children,
}) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.labelStyle}>{placeholder}</Text>
      <Picker
        selectedValue={defaultValue}
        onValueChange={onChangeItem}
        style={{
          height: 20,
          color: '#8193ae',
          fontFamily: 'Segoe UI',
          fontSize: 13,
        }}
        mode="dropdown">
        <Item label={placeholder} />
        {items
          ? items.map((val) => <Item label={val.label} value={val.value} />)
          : children}
        {/* {items.map((val) => (
          <Item label={val.label} value={val.value} />
        ))} */}
      </Picker>
      {/* <DropDownPicker
        items={items}
        defaultValue={defaultValue}
        containerStyle={{
          padding:0,
          marginTop: 0,
          height: 40,
        }}
        placeholder={placeholder}
        style={{
          backgroundColor: '#fff',
          width: '100%',
          borderWidth: 0,
          borderRadius: 20,
          marginBottom: 10
        }}
        selectedLabelStyle={{
          color: '#8193ae',
          fontFamily: 'Segoe UI',
          fontSize: 17,
          margin:0,
          padding:0
        }}
        placeholderStyle={{
          color: '#8193ae',
          fontFamily: 'Segoe UI',
          fontSize: 17,
          margin:0,
          padding:0
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
      /> */}
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    height: 65,
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
    fontFamily: 'Segoe UI Semibold',
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: 15,
    padding: 0,
    textTransform: 'uppercase',
    fontSize: 13,
    height: 15,
  },
});
