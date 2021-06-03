import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import TextInputMask from 'react-native-text-input-mask';
import {DateInput} from '../DateInput';
import {TextInput} from '../TextInput';

type Props = {
  visible: boolean;
  handleClose: () => void;
};

export const PUCPopUp = ({visible, handleClose}: Props) => {
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={handleClose}
      hasBackdrop={true}
      style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, {color: '#0E5A93', fontSize: 17}]}>
            PUC Details
          </Text>
          <Icon
            name="close"
            onPress={handleClose}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View
          style={{
            margin: 10,
          }}>
          <TextInput placeholder="PUC No" label="PUC No" />
          <DateInput
            onChangeText={(formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890
            }}
            label="PUC Date"
          />
          <DateInput
            onChangeText={(formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890
            }}
            label="Valid Date"
          />
          <Button title="Add PUC" buttonStyle={styles.btnLogIn} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 0,
    shadowColor: '#0655911A',
    shadowOpacity: 10,
    shadowRadius: 5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnLogIn: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
    marginBottom: 10,
  },
  container: {
    backgroundColor:'#f6f7fb',
    padding: 10,
    opacity: 1,
    borderRadius: 15,
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  titleStyle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 15,
    color: '#000',
  },
  dateInput: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    fontSize: 17,
    height: 20,
    fontFamily: 'Segoe UI',
    color: '#8193ae',
  },
  dateSection: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 60,
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
    marginTop: 10,
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
