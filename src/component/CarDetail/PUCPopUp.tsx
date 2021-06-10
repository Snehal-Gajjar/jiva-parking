import {Formik} from 'formik';
import moment from 'moment';
import React, {Dispatch, SetStateAction, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {
  getPUCInitialValue,
  pucValidationSchema,
} from '../../screen/CarDetail/addCarValues';
import {PUC} from '../../utils/types';
import {DateInput} from '../DateInput';
import {TextInput} from '../TextInput';

type Props = {
  visible: boolean;
  setPuc: Dispatch<SetStateAction<PUC | undefined>>;
  handleClose: () => void;
};

export const PUCPopUp = ({visible, handleClose, setPuc}: Props) => {
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
        <Formik
          initialValues={getPUCInitialValue()}
          validationSchema={pucValidationSchema}
          onSubmit={(values) => {
            setPuc(values);
            handleClose();
          }}>
          {({
            handleChange,
            errors,
            handleSubmit,
            values,
            setFieldError,
            setFieldValue,
          }) => (
            <View
              style={{
                margin: 10,
              }}>
              <TextInput
                placeholder="PUC No"
                error={errors.puc_no && errors.puc_no}
                value={values.puc_no}
                onChangeText={handleChange('puc_no')}
                label="PUC No"
              />
              <DateInput
                type="datetime"
                onChangeText={(formatted) => {
                  setFieldValue('puc_date', moment(formatted));
                }}
                onSubmitEditing={() => {
                  if (!moment(values.puc_date).isValid()) {
                    setFieldError('puc_date', 'Invalid Date');
                  }
                }}
                error={errors.puc_date && 'Invalid Date'}
                label="PUC Date"
              />
              <DateInput
                type="datetime"
                onChangeText={(formatted) => {
                  setFieldValue('puc_expiry', moment(formatted));
                }}
                onSubmitEditing={() => {
                  if (!moment(values.puc_expiry).isValid()) {
                    setFieldError('puc_expiry', 'Invalid Date');
                  }
                }}
                error={errors.puc_expiry && 'Invalid Date'}
                label="Valid Date"
              />
              <Button
                title="Add PUC"
                buttonStyle={styles.btnLogIn}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
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
