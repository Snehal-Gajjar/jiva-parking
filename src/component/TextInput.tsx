import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon, Input, InputProps} from 'react-native-elements';

type Props = {
  iconType?: string;
  iconName?: string;
  error?: string;
} & InputProps;

export const TextInput: FC<Props> = ({iconName, iconType, ...props}) => {
  return (
    <>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: props.error ? 'red' : 'transparent',
            borderWidth: props.error ? 1 : 0,
          },
        ]}>
        <Icon
          style={{
            marginLeft: 5,
          }}
          type={iconType}
          name={iconName ? iconName : ''}
          size={20}
          color="#0E5A93"></Icon>

        <Input
          labelStyle={style.labelStyle}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 45,
          }}
          inputStyle={style.inputContainerStyle}
          containerStyle={{
            height: 45,
          }}
          errorMessage=""
          {...props}
          style={{
            fontFamily: 'Segoe UI',
            marginTop: 15,
            color: '#8193ae',
          }}
        />
      </View>
      {props.error && (
        <Text
          style={{
            fontSize: 15,
            color: 'red',
            fontFamily: 'Segoe UI',
          }}>
          {props.error}
        </Text>
      )}
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
  labelStyle: {
    color: '#000',
    fontFamily: 'Segoe UI',
    marginTop: 0,
    marginBottom: 0,
    textTransform: 'uppercase',
    fontSize: 13,
  },
  inputContainerStyle: {
    width: '90%',
    padding: 0,
    borderBottomWidth: 0,
    fontSize: 17,
    marginBottom: 20,
    color: '#8193ae',
    fontFamily: 'Segoe UI',
  },
});
