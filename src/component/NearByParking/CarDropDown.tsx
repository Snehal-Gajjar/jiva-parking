import React, {Dispatch, FC, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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
      <DropDownPicker
        items={[
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
        ]}
        defaultValue={selectedCar}
        containerStyle={{height: 40, marginTop: 5}}
        style={{backgroundColor: '#fff', borderRadius: 10, borderWidth: 1}}
        itemStyle={{
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
        }}
        zIndex={999}
        zIndexInverse={6000}
        dropDownStyle={{backgroundColor: '#fff', borderRadius: 20}}
        onChangeItem={(item) => setSelectedCar(item.value)}
      />
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
