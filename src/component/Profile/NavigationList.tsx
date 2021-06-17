import React, {FC, useContext} from 'react';
import {View} from 'react-native';
import {Icon, ListItem, Avatar} from 'react-native-elements';
import {CurrentUserContext} from '../../utils/context';
import storage from '../../utils/storage';

export const NavigationList = () => {
  const context = useContext(CurrentUserContext);
  const handleLogout = () => {
    storage.remove({key: 'user'});
    context.handleUser();
  };
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Avatar source={require('../../assets/images/customerservice.png')} />
        <ListItem.Content>
          <ListItem.Title>Help and Support</ListItem.Title>
          <ListItem.Subtitle>Reach out to us</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Avatar source={require('../../assets/images/deal.png')} />
        <ListItem.Content>
          <ListItem.Title>Our Partners</ListItem.Title>
          <ListItem.Subtitle>View our top partners</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Avatar source={require('../../assets/images/insurance.png')} />
        <ListItem.Content>
          <ListItem.Title>Privacy Policy</ListItem.Title>
          <ListItem.Subtitle>View Privacy Policy</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Avatar source={require('../../assets/images/insurance.png')} />
        <ListItem.Content>
          <ListItem.Title>Terms & Condition</ListItem.Title>
          <ListItem.Subtitle>View terms & condition</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={handleLogout.bind(this)}
        containerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Icon name="logout" type="antdesign" color="#0E5A93"></Icon>
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};
