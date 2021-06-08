import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {CurrentUserContext} from '../../utils/context';
import storage from '../../utils/storage';

type Props = {
  props: DrawerContentComponentProps<DrawerContentOptions>;
};

export const CustomDrawerItem = ({props}: Props) => {
  const context = useContext(CurrentUserContext);
  const handleLogout = () => {
    storage.remove({key: 'user'});
    context.handleUser();
  };
  return (
    <View style={{flex: 1}}>
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('Dashboard')}>
        <ListItem.Content>
          <ListItem.Title>Dashbaord</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('NearByParking')}>
        <ListItem.Content>
          <ListItem.Title>Near By Parking</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('Wallet')}>
        <ListItem.Content>
          <ListItem.Title>Wallet</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('CarDetail')}>
        <ListItem.Content>
          <ListItem.Title>Car Detail</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('Scanning')}>
        <ListItem.Content>
          <ListItem.Title>Scanning</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={() => handleLogout()}>
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};
