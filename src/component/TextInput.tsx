import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Input, InputProps} from 'react-native-elements';

type Props = {
  iconType: string;
  iconName: string;
} & InputProps;

export const TextInput: FC<Props> = ({iconName, iconType, ...props}) => {
  return (
    <>
      <View style={style.inputContainer}>
        <Icon type={iconType} name={iconName} size={25} color="#0E5A93"></Icon>
        <Input
          labelStyle={style.labelStyle}
          inputContainerStyle={style.inputContainerStyle}
          {...props}
          style={{
            fontFamily: 'Segoe UI',
          }}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
    padding: 10,
    marginTop: 10,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  labelStyle:{
    color: '#000',
    fontFamily: 'Segoe UI Bold',
    marginTop: 25,
    textTransform: 'capitalize',
  },
  inputContainerStyle:{
    height: 30,
    width: '90%',
    padding: 0,
    borderBottomWidth: 0,
  }
});
