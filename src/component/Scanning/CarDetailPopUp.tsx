import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

type Props = {
  visible: boolean;
  handleClose: () => void;
  data: {id: string; carName: string; carNo: string; license: string};
};

export const CarDetailPopUp: FC<Props> = ({visible, handleClose, data}) => {
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={handleClose}
      coverScreen={true}
      hasBackdrop={true}
      style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, {color: '#0E5A93', fontSize: 17}]}>
            Scanned Car Detail
          </Text>
          <Icon
            name="close"
            onPress={handleClose.bind(this)}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Car Name:</Text>
            <Text style={styles.fieldValue}>{data.carName}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Car Number:</Text>
            <Text style={styles.fieldValue}>{data.carNo}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>License Number:</Text>
            <Text style={styles.fieldValue}>{data.license}</Text>
          </View>
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
  container: {
    backgroundColor: '#FFF',
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
    marginTop: 10,
  },
  fieldTitle: {
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    fontSize: 15,
    fontWeight: '500',
  },
  fieldValue: {
    color: '#000',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    marginLeft: 6
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
});
