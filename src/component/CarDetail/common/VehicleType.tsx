import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {ItemType} from 'react-native-dropdown-picker';
import {CarService} from '../../../api/services';
import {toastShow} from '../../../utils/Toast';
import {CarDrp} from '../CarDrp';

type Props = {
  onChangeItem: (data: string) => void;
  defaultValue?: string;
};

export const VehicleType = ({onChangeItem, defaultValue}: Props) => {
  const [vehicleType, setVehicleType] = useState([]);

  useEffect(() => {
    handleType();
  }, []);

  const handleType = () => {
    CarService.getType()
      .then((result) => {
        setVehicleType(result.data);
      })
      .catch((error) => {
        console.log(error);
        toastShow('error', error.message);
      });
  };
  return (
    <CarDrp
      placeholder="Vehicle Type"
      defaultValue={defaultValue}
      onChangeItem={onChangeItem}>
      {vehicleType.map((type: {title: string; id: string}) => (
        <Picker.Item label={type.title} value={type.id}></Picker.Item>
      ))}
    </CarDrp>
  );
};
