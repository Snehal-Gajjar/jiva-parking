import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {CarService} from '../../../api/services';
import {toastShow} from '../../../utils/Toast';

type Props = {
  visible: boolean;
  handleClose: () => void;
  carName: string;
  carNo?: string;
  carId?: string;
  getCars: () => void;
};
export const DeleteCarPopUp = ({
  visible,
  handleClose,
  carId,
  carName,
  carNo,
  getCars,
}: Props) => {
  const [loading, setloading] = useState<boolean>(false);
  const handleDelete = () => {
    setloading(true);
    carId &&
      CarService.deleteCar(carId)
        .then((result) => {
          console.log(`ASTHA ${JSON.stringify(result)}`);
          setloading(false);
          handleClose();
          getCars();
          toastShow('success', result.message);
        })
        .catch((error) => {
          setloading(false);
          console.log(error);
          handleClose();
          toastShow('error', error.message);
        });
  };
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
            Delete Car
          </Text>
          <Icon
            name="close"
            onPress={handleClose}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Segoe UI',
              fontSize: 17,
              color: '#8294ad',
            }}>{`Are you sure you want to delete ${carName} : ${carNo}?`}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              loading={loading}
              title="Delete"
              buttonStyle={styles.btnLogIn}
              onPress={handleDelete}
            />
            <Button
              type="outline"
              title="Cancel"
              buttonStyle={styles.btnLogIn}
              onPress={handleClose}
            />
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
    backgroundColor: '#f6f7fb',
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
  btnLogIn: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
    marginBottom: 10,
    marginRight: 10,
  },
});
