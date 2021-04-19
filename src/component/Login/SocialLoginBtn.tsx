import React, {FC} from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

type Props = {
    title:string,
    iconType:string
    iconName:string
}

export const SocialLoginBtn: FC<Props> = ({title, iconName, iconType}) => {
  return (
    <Button
      icon={<Icon name={iconName} style={{
          alignItems:'center',
          borderRadius:10,
          display:'flex',
          marginRight:6,
          justifyContent:'center'
      }} type={iconType} size={25} color="white" />}
      title={title}
      titleStyle={{
        fontSize: 13,
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
      }}
      containerStyle={{
        width: '50%',
        padding: 2,
      }}
    />
  );
};
