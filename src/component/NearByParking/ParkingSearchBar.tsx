import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Input, InputProps} from 'react-native-elements';

type Props = InputProps;

export const ParkingSearchBar: FC<Props> = ({...props}) => {
  return (
    <View style={style.inputContainer}>
      <Input
        inputContainerStyle={style.inputContainerStyle}
        {...props}
        style={{
          fontFamily: 'Segoe UI',
        }}
        placeholder="Search Parking"
      />
      <Button
        raised
        buttonStyle={style.torchButtonStyle}
        icon={
          <Icon
            name="search"
            color="#FFF"
            type="feather"
            style={style.btnImage}
          />
        }
        containerStyle={style.torchContainer}></Button>
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
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
    fontFamily: 'Segoe UI Bold',
    textTransform: 'capitalize',
  },
  inputContainerStyle: {
    height: 40,
    width: '100%',
    padding: 0,
    marginTop: 30,
    borderBottomWidth: 0,
  },
  torchContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    backgroundColor: '#0E5A93',
  },
  torchButtonStyle: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0E5A93',
  },
  btnImage: {
    width: 30,
    height: 30,
  },
});
