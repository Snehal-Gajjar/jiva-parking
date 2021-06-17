import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Card, Icon, Image} from 'react-native-elements';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {CarList} from '../../utils/types';
import {DeleteCarPopUp} from './common/DeleteCarPopUp';
import { QRCodeModal } from './common/QRCodeModal';
import {CarItemStyle} from './style';

type Props = {
  data: CarList;
  navigation: StackNavigationProp<RootStackParamList>;
  getCars: () => void;
};

export const CarItem: FC<Props> = ({data, navigation, getCars}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [qrvisible, setQrvisible] = useState<boolean>(false);

  const handleClose = () => {
    setVisible(!visible);
  };

  const handleQRClose = () => {
    setQrvisible(!qrvisible);
  };

  const handleEdit = (data: CarList) => {
    navigation.navigate('AddCar', {
      edit: true,
      carDetail: data,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Card containerStyle={CarItemStyle.cardContainer}>
        <View style={CarItemStyle.cardTitleContainer}>
          <Text
            style={{
              color: '#8294ad',
              fontFamily: 'Segoe UI',
              fontSize: 15,
            }}>
            {data.brand + ' ' + data.model}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Icon
              name="qrcode"
              type="antdesign"
              color="#0E5A93"
              size={25}
              onPress={handleQRClose.bind(this)}
              style={{marginRight: 10}}></Icon>
            <Icon
              size={25}
              name="edit-3"
              onPress={(e) => {
                e.preventDefault();
                handleEdit(data);
              }}
              type="feather"
              color="#0E5A93"
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={CarItemStyle.carImageContainer}>
            <Image
              source={
                data.icon
                  ? {uri: data.icon}
                  : require('../../assets/images/car.png')
              }
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>
        <View style={CarItemStyle.carNumberContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Segoe UI Semibold',
              color: '#0E5A93',
            }}>
            {data.registration_no}
          </Text>
          <Button
            buttonStyle={CarItemStyle.deleteButtonStyle}
            icon={
              <Icon
                name="delete-empty"
                type="material-community"
                color="#FFFFFF"
              />
            }
            onPress={handleClose.bind(this)}
            containerStyle={CarItemStyle.deleteContainer}></Button>
        </View>
      </Card>
      <DeleteCarPopUp
        {...{visible, handleClose, getCars}}
        carId={data.id}
        carName={data.brand + ' ' + data.model}
        carNo={data.registration_no}
      />
      <QRCodeModal
        {...{qrvisible, handleQRClose}}
        id={data.id}
        carName={data.brand + ' ' + data.model}
        carNo={data.registration_no}
      />
    </View>
  );
};
