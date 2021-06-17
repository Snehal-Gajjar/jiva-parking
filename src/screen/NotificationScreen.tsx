import {StackNavigationProp} from '@react-navigation/stack';
import moment from 'moment';
import React, {FC, useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {AuthService} from '../api/services';
import {HeaderContainer} from '../component/common/HeaderContainer';
import {RootStackParamList} from '../utils/NavigationTypes';
import {toastShow} from '../utils/Toast';
import {Notification} from '../utils/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const NotificationScreen: FC<Props> = ({navigation}) => {
  const [notification, setNotification] = useState<Notification[]>([]);
  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    AuthService.notifications()
      .then((result) => setNotification(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <ScrollView style={{flex: 1}}>
      <HeaderContainer {...{navigation}} isProfile title="Notification" />
      {notification.map((noti) => (
        <NotificationItem data={noti} />
      ))}
    </ScrollView>
  );
};

type ItemProps = {
  data: Notification;
};

const NotificationItem = ({data}: ItemProps) => {
  return (
    <Card containerStyle={style.cardContainer}>
      <View style={style.titlecontainer}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Segoe UI Semibold',
            fontSize: 15,
          }}>
          {data.title}
        </Text>
        <Text style={{color: '#8294ad', fontFamily: 'Segoe UI', fontSize: 13}}>
          {moment(data.sending_schedule).format('DD-MM-YY hh:mm')}
        </Text>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titlecontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
