import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {ItemType} from 'react-native-dropdown-picker';
import {CarService} from '../../../api/services';
import {toastShow} from '../../../utils/Toast';
import {CarDrp} from '../CarDrp';

type Props = {
  brandId: string;
  onChangeItem: (data: string) => void;
  defaultValue?: string;
};

export const VehicleModel = ({brandId, onChangeItem, defaultValue}: Props) => {
  const [model, setModel] = useState([]);

  useEffect(() => {
    handleModel();
  }, [brandId]);

  const handleModel = () => {
    CarService.getModel(brandId)
      .then((result) => {
        setModel(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <CarDrp
      placeholder="Model"
      defaultValue={defaultValue}
      onChangeItem={onChangeItem}>
      {model.map((type: {name: string; id: string}) => (
        <Picker.Item label={type.name} value={type.id}></Picker.Item>
      ))}
    </CarDrp>
  );
};
