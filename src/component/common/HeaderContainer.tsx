import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Icon, Header, Button} from 'react-native-elements';
import {ParkingSearchBar} from '../NearByParking/ParkingSearchBar';
import {HeaderStyle} from './styles';

type Props = {
  title?: string;
  nearByParking?: boolean;
  isMargin?: boolean;
};

export const HeaderContainer: FC<Props> = ({title, nearByParking, isMargin}) => {
  return (
    <Header
      centerComponent={
        nearByParking ? (
          <ParkingSearchBar />
        ) : (
          <Text style={[HeaderStyle.titleStyle, {marginLeft: title || isMargin ? 15 : 35}]}>
            {title}
          </Text>
        )
      }
      containerStyle={{
        width: '100%',
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
      }}
      leftComponent={
        <Icon
          name="align-left"
          type="foundation"
          color="#0E5A93"
          size={25}
          style={{
            marginLeft: title || nearByParking || isMargin ? 5 : 15,
            marginTop: nearByParking? 10 : 0
          }}></Icon>
      }
      statusBarProps={{barStyle: 'default'}}
      placement="center"
      rightComponent={
        nearByParking ? (
          <View style={HeaderStyle.torchContainer}>
            <Button
              raised
              buttonStyle={HeaderStyle.torchButtonStyle}
              icon={
                <Icon
                  name="filter"
                  color="#0E5A93"
                  type="feather"
                  style={HeaderStyle.btnImage}
                />
              }
              containerStyle={HeaderStyle.torchContainer}></Button>
          </View>
        ) : (
          <View style={HeaderStyle.iconContainer}>
            <Icon
              name="search"
              type="feather"
              color="#0E5A93"
              size={25}
              style={{
                marginRight: 10,
              }}></Icon>
            <Icon
              name="bell"
              type="feather"
              color="#0E5A93"
              size={25}
              style={{
                marginRight: title ? 5 : 15,
              }}></Icon>
          </View>
        )
      }
    />
  );
};
