import React, {Dispatch, SetStateAction, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Insurance, PUC} from '../../utils/types';
import {CarNotiBtn} from './CarNotiBtn';
import {InsurancePopUp} from './InsurancePopUp';
import {PUCPopUp} from './PUCPopUp';

type Props = {
  visible: boolean;
  handleClose: () => void;
  handleAddCar: () => void;
  setPuc: Dispatch<SetStateAction<PUC | undefined>>;
  setInsurance: Dispatch<SetStateAction<Insurance | undefined>>;
};

export const CarNotificationAlert = ({
  visible,
  handleClose,
  setPuc,
  setInsurance,
  handleAddCar,
}: Props) => {
  const [open, setOpen] = useState({
    puc: false,
    insurance: false,
  });
  const {puc, insurance} = open;
  const handlePopUpClose = (type: 'puc' | 'insurance') => {
    setOpen({...open, [type]: type === 'puc' ? !puc : !insurance});
  };
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      coverScreen={false}
      onSwipeComplete={handleClose}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleModal}>
            Get Notification on Other Services
          </Text>
          <Icon
            name="close"
            onPress={(e) => {
              e.preventDefault();
              handleAddCar();
            }}
            size={20}
            color="#0E5A93"></Icon>
        </View>

        <View style={styles.iconContainer}>
          <CarNotiBtn
            image={require('../../assets/images/puc.png')}
            title="PUC"
            onPress={(e) => {
              e.preventDefault();
              handlePopUpClose('puc');
            }}
          />
          <CarNotiBtn
            image={require('../../assets/images/insuarnce.png')}
            title="Insurance"
            onPress={(e) => {
              e.preventDefault();
              handlePopUpClose('insurance');
            }}
          />
        </View>
        <Button
          title="Add Notification"
          buttonStyle={styles.btnLogIn}
          onPress={(e) => {
            e.preventDefault();
            handleAddCar();
          }}
        />
      </View>
      <PUCPopUp
        setPuc={setPuc}
        visible={puc}
        handleClose={() => handlePopUpClose('puc')}
      />
      <InsurancePopUp
        visible={insurance}
        setInsurance={setInsurance}
        handleClose={() => handlePopUpClose('insurance')}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 9999,
  },
  btnLogIn: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
    marginBottom: 10,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    opacity: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 50,
    alignItems: 'baseline',
  },
  titleModal: {
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
});
