import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import {useEffect} from 'react';
import {CarService} from '../../api/services';
import {toastShow} from '../../utils/Toast';

type Props = {
  selectedCar: string;
  setSelectedCar: Dispatch<SetStateAction<string>>;
};

export const CarDropDown: FC<Props> = ({selectedCar, setSelectedCar}) => {
  const [car, setCars] = useState<{registration_no: string; id: string}[]>([]);
  useEffect(() => {
    getCars();
  }, []);
  const getCars = () => {
    CarService.getCars()
      .then((result) => {
        setCars(result.data);
      })
      .catch((error) => {
        console.log(error);
        toastShow('error', error.message);
      });
  };
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
          {car.map((val) => (
            <Picker.Item label={val.registration_no} value={val.id} />
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
