import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Input, InputProps} from 'react-native-elements';

type Props = {handleSearchBtn?: () => void} & InputProps;

export const ParkingSearchBar: FC<Props> = ({...props}) => {
  return (
    <View style={style.inputContainer}>
      <Input
        inputContainerStyle={style.inputContainerStyle}
        {...props}
        containerStyle={{
          height: 40,
        }}
        style={[
          style.inputContainerStyle,
          {
            fontFamily: 'Segoe UI',
          },
        ]}
        placeholder="Search Parking"
      />
      <Button
        raised
        onPress={props.handleSearchBtn?.bind(this)}
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
    borderWidth: 0.3,
    borderColor: '#0655911A',
    height: 40,
    shadowColor: '#0655911A',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  labelStyle: {
    color: '#000',
    fontFamily: 'Segoe UI Semibold',
    textTransform: 'capitalize',
  },
  inputContainerStyle: {
    width: '100%',
    padding: 0,
    borderBottomWidth: 0,
    color: '#8193ae',
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
