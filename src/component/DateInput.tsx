import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInputMaskProps, TextInputMask} from 'react-native-masked-text';

type Props = {
  label: string;
  error?: string;
} & TextInputMaskProps;

export const DateInput = ({...props}: Props) => {
  return (
    <>
      <View
        style={[
          styles.dateSection,
          {
            borderColor: props.error ? 'red' : 'transparent',
            borderWidth: props.error ? 1 : 0,
          },
        ]}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInputMask
          options={{
            format: 'YYYY-DD-MM',
            mask: '[0][0][0][0]-[0][0]-[0][0]',
          }}
          style={styles.dateInput}
          placeholder="YYYY-DD-MM"
          {...props}
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

const styles = StyleSheet.create({
  dateInput: {
    paddingLeft: 0,
    backgroundColor: '#fff',
    fontSize: 17,
    height: 40,
    fontFamily: 'Segoe UI',
    color: '#8193ae',
  },
  dateSection: {
    height: 'auto',
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 5,
    borderRadius: 10,
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
    fontFamily: 'Segoe UI Semibold',
    marginBottom: 0,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
