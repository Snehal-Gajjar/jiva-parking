import {Formik} from 'formik';
import moment from 'moment';
import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {
  getInsuranceInitialValue,
  insuranceValidationSchema,
} from '../../screen/CarDetail/addCarValues';
import {Insurance} from '../../utils/types';
import {DateInput} from '../DateInput';
import {TextInput} from '../TextInput';
import {CarDrp} from './CarDrp';
import {InsuranceType} from './CarDrpData';

type Props = {
  visible: boolean;
  handleClose: () => void;
  setInsurance: Dispatch<SetStateAction<Insurance | undefined>>;
};

export const InsurancePopUp = ({visible, handleClose, setInsurance}: Props) => {
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
            Insurance Details
          </Text>
          <Icon
            name="close"
            onPress={handleClose.bind(this)}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <Formik
          initialValues={getInsuranceInitialValue()}
          validationSchema={insuranceValidationSchema}
          onSubmit={(values) => {
            setInsurance(values);
            handleClose();
          }}>
          {({
            handleChange,
            errors,
            handleSubmit,
            values,
            setFieldValue,
            setFieldError,
          }) => (
            <View>
              <View
                style={{
                  margin: 10,
                  zIndex: 999,
                }}>
                <TextInput
                  placeholder="Policy No"
                  label="Policy Number"
                  error={
                    errors.insurance_policy_no && errors.insurance_policy_no
                  }
                  value={values.insurance_policy_no}
                  onChangeText={handleChange('insurance_policy_no')}
                />
                <TextInput
                  placeholder="Company name"
                  label="Company"
                  error={
                    errors.insurance_policy_company &&
                    errors.insurance_policy_company
                  }
                  value={values.insurance_policy_company}
                  onChangeText={handleChange('insurance_policy_company')}
                />
                <DateInput
                  type="datetime"
                  onChangeText={(formatted) => {
                    setFieldValue('insurance_policy_date', moment(formatted));
                  }}
                  onSubmitEditing={() => {
                    if (!moment(values.insurance_policy_date).isValid()) {
                      setFieldError('puc_expiry', 'Invalid Date');
                    }
                  }}
                  error={errors.insurance_policy_date && 'Invalid Date'}
                  label="Date"
                />
                <DateInput
                  type="datetime"
                  onChangeText={(formatted) => {
                    setFieldValue(
                      'insurance_policy_expiry_date',
                      moment(formatted),
                    );
                  }}
                  onSubmitEditing={() => {
                    if (
                      !moment(values.insurance_policy_expiry_date).isValid()
                    ) {
                      setFieldError('puc_expiry', 'Invalid Date');
                    }
                  }}
                  error={errors.insurance_policy_expiry_date && 'Invalid Date'}
                  label="Expire Date"
                />
                <TextInput
                  placeholder="Insurance Amount"
                  label="Amount"
                  value={values.insurance_policy_amount}
                  onChangeText={handleChange('insurance_policy_amount')}
                />
                <CarDrp
                  items={InsuranceType}
                  placeholder="Insurance Type"
                  onChangeItem={(data) => {
                    setFieldValue('insurance_policy_type', data);
                  }}
                />
              </View>
              <Button
                title="Add Insurance"
                buttonStyle={styles.btnLogIn}
                onPress={handleSubmit.bind(this)}
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
