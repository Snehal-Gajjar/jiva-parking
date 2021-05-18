import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Input, InputProps} from 'react-native-elements';

type Props = {
  iconType?: string;
  iconName?: string;
} & InputProps;

export const TextInput: FC<Props> = ({iconName, iconType, ...props}) => {
  return (
    <>
      <View style={style.inputContainer}>
        <Icon style={{
          marginLeft: 5
        }} type={iconType} name={iconName ? iconName : ''} size={20} color="#0E5A93"></Icon>

        <Input
          labelStyle={style.labelStyle}
          inputContainerStyle={style.inputContainerStyle}
          containerStyle={{
            marginTop:10
          }}
          {...props}
          style={{
            fontFamily: 'Segoe UI',
            marginTop: 15,
            color:'#8193ae'
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
    height: 60,
    padding: 7,
    marginTop: 10,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  labelStyle: {
    color: '#000',
    fontFamily: 'Segoe UI',
    marginTop: 20,
    marginBottom: 0,
    textTransform: 'uppercase',
    fontSize: 13,
  },
  inputContainerStyle: {
    width: '90%',
    padding: 0,
    borderBottomWidth: 0,
    height: 20,
    fontSize: 15,
    marginBottom: 17,
    marginTop: 0,
    color:'#8193ae',
    fontFamily: 'Segoe UI',
  },
});
