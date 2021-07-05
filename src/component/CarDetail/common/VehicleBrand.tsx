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

export const VehicleBrand = ({onChangeItem, defaultValue}: Props) => {
  const [maker, setMaker] = useState([]);

  useEffect(() => {
    handleType();
  }, []);

  const handleType = () => {
    CarService.getMaker()
      .then((result) => {
        setMaker(result.data);
      })
      .catch((error) => {
        toastShow('error', error.message);
      });
  };
  return (
    <CarDrp
      placeholder="Maker"
      defaultValue={defaultValue}
      onChangeItem={onChangeItem}>
      {maker.map((type: {name: string; id: string}) => (
        <Picker.Item label={type.name} value={type.id}></Picker.Item>
      ))}
    </CarDrp>
  );
};
