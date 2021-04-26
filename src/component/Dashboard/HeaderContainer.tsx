import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Icon, Header} from 'react-native-elements';

type Props = {
  title?: string;
};

export const HeaderContainer: FC<Props> = ({title}) => {
  return (
    <Header
      centerComponent={
        <Text
          style={{
            fontFamily: 'Segoe UI Bold',
            color: '#0E5A93',
            fontSize: 19,
            marginLeft: title ? 15 : 35,
          }}>
          {title}
        </Text>
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
            marginLeft: title ? 5 : 15,
          }}></Icon>
      }
      statusBarProps={{barStyle: 'default'}}
      placement="center"
      rightComponent={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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
      }
    />
  );
};
