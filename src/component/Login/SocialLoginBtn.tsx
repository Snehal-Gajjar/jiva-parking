import React, {FC} from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

type Props = {
  title: string;
  iconType: string;
  iconName: string;
  signup?: boolean;
};

export const SocialLoginBtn: FC<Props> = ({
  title,
  iconName,
  iconType,
  signup,
}) => {
  return (
    <Button
      icon={
        <Icon
          name={iconName}
          style={{
            alignItems: 'center',
            borderRadius: 10,
            display: 'flex',
            marginRight: 6,
            justifyContent: 'center',
          }}
          type={iconType}
          size={20}
          color="white"
        />
      }
      title={signup ? '' : title}
      titleStyle={{
        fontSize: 13,
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
      }}
      containerStyle={{
        width: signup? '15%' : '50%',
        marginRight: 5,
      }}
    />
  );
};
