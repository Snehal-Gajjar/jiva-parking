import React, {Dispatch, FC, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
  selectedCar: string;
  setSelectedCar: Dispatch<SetStateAction<string>>;
};

export const CarDropDown: FC<Props> = ({selectedCar, setSelectedCar}) => {
  return (
    <View
      style={{
        zIndex: 999,
      }}>
      <Text style={styles.titleStyle}>Car Info</Text>
      <View
        style={{
          width: '100%',
          height: 45,
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <Picker
          selectedValue={selectedCar}
          onValueChange={(item) => setSelectedCar(item)}
          style={{
            fontSize: 13,
          }}
          mode="dropdown">
          {[
            {
              label: 'GJ 02 BJ 0420',
              value: 'GJ01',
            },
            {
              label: 'GJ 02 BJ 0420',
              value: 'GJ01',
            },
            {
              label: 'GJ 02 BJ 0420',
              value: 'GJ03',
            },
          ].map((val) => (
            <Picker.Item label={val.label} value={val.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
});
