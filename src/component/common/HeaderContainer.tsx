import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Icon, Header, Button} from 'react-native-elements';
import {
  RootDrawerParamList,
  RootStackParamList,
} from '../../utils/NavigationTypes';
import {ParkingSearchBar} from '../NearByParking/ParkingSearchBar';
import {HeaderStyle} from './styles';

type Props = {
  title?: string;
  nearByParking?: boolean;
  isMargin?: boolean;
  handleFilter?: () => void;
  isProfile?: boolean;
  navigation: StackNavigationProp<RootStackParamList>;
};

export const HeaderContainer: FC<Props> = ({
  title,
  nearByParking,
  isMargin,
  handleFilter,
  navigation,
  isProfile,
}) => {
  const handleDrawer = () => {
    navigation.navigate('Profile');
  };
  return (
    <Header
      centerComponent={
        nearByParking ? (
          <ParkingSearchBar />
        ) : (
          <Text
            style={[
              HeaderStyle.titleStyle,
              {marginLeft: title || isMargin ? 15 : 35},
            ]}>
            {title}
          </Text>
        )
      }
      containerStyle={{
        width: '100%',
        backgroundColor: handleFilter ? '#fff' : 'transparent',
        borderBottomColor: 'transparent',
      }}
      leftComponent={
        isProfile ? (
          <Icon
            name="arrow-back"
            type="ionicon"
            color="#0E5A93"
            size={25}
            style={{
              marginLeft: title || nearByParking || isMargin ? 5 : 20,
              marginTop: nearByParking ? 10 : 0,
            }}
            onPress={() => navigation.goBack()}></Icon>
        ) : (
          <Icon
            name="align-left"
            type="foundation"
            color="#0E5A93"
            size={25}
            style={{
              marginLeft: title || nearByParking || isMargin ? 5 : 20,
              marginTop: nearByParking ? 10 : 0,
            }}
            onPress={handleDrawer}></Icon>
        )
      }
      statusBarProps={{barStyle: 'default'}}
      placement="center"
      rightComponent={
        nearByParking ? (
          <View style={HeaderStyle.torchContainer}>
            <Button
              raised
              buttonStyle={HeaderStyle.torchButtonStyle}
              onPress={handleFilter}
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
        ) : !isProfile ? (
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
        ) : (
          <></>
        )
      }
    />
  );
};
