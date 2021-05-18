import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Button, Card, Icon, Image} from 'react-native-elements';
import {CarItemStyle} from './style';

type Props = {
  data: {
    id: string;
    carName: string;
    carNumber: string;
  };
};

export const CarItem: FC<Props> = ({data}) => {
  return (
    <View>
      <Card containerStyle={CarItemStyle.cardContainer}>
        <View style={CarItemStyle.cardTitleContainer}>
          <Text style={{
              color:'#8294ad',
              fontFamily:'Segoe UI',
              fontSize: 15
          }}>{data.carName}</Text>
          <Icon size={20} name="edit-3" type="feather" color="#0E5A93" />
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={CarItemStyle.carImageContainer}>
            <Image
              source={require('../../assets/images/car.png')}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>
        <View style={CarItemStyle.carNumberContainer}>
          <Text style={{
              fontSize: 18,
              fontFamily:'Segoe UI Semibold',
              color:'#0E5A93'
          }}>{data.carNumber}</Text>
          <Button
            buttonStyle={CarItemStyle.deleteButtonStyle}
            icon={
              <Icon
                name="delete-empty"
                type="material-community"
                color="#FFFFFF"
              />
            }
            containerStyle={CarItemStyle.deleteContainer}></Button>
          {/* <Icon name="delete-empty" type="material-community" color="#FFFFFF" /> */}
        </View>
      </Card>
    </View>
  );
};
