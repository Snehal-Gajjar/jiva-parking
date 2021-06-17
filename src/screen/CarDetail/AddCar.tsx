import {RouteProp} from '@react-navigation/native';
import {StackNavigationState} from '@react-navigation/routers';
import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {CarService} from '../../api/services';
import {CarDrp} from '../../component/CarDetail/CarDrp';
import {VehicleFuel} from '../../component/CarDetail/CarDrpData';
import {CarNotificationAlert} from '../../component/CarDetail/CarNotificationAlert';
import {VehicleBrand} from '../../component/CarDetail/common/VehicleBrand';
import {VehicleModel} from '../../component/CarDetail/common/VehicleModel';
import {VehicleType} from '../../component/CarDetail/common/VehicleType';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {TextInput} from '../../component/TextInput';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {AddCarDetail, Car, Insurance, PUC} from '../../utils/types';
import {commonValidationSchema, getInitialValue} from './addCarValues';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'AddCar'>;
};

export const AddCar: FC<Props> = ({navigation, route}) => {
  const isEdit = route.params.edit;
  const [visible, setVisible] = useState<boolean>(false);
  const [values, setValues] = useState<AddCarDetail>();
  const [puc, setPuc] = useState<PUC>();
  const [insurance, setInsurance] = useState<Insurance>();

  const intialValues = isEdit
    ? getInitialValue(route.params.carDetail)
    : getInitialValue();

  const handleClose = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [intialValues]);

  const handleAddCar = () => {
    CarService.addCar({
      ...values,
      ...puc,
      ...insurance,
    })
      .then((result) => {
        console.log(`ASTHA ${JSON.stringify(result)}`);
        handleClose();
        navigation.navigate('CarDetail');
      })
      .catch((error) => {
        console.log(error);
        toastShow('error', error.message);
      });
  };

  const handleUpdateCar = (values: AddCarDetail, id: string) => {
    CarService.updateCar(
      {
        ...values,
      },
      id,
    )
      .then((result) => {
        console.log(result);
        toastShow('success', result.message);
        navigation.navigate('CarDetail');
      })
      .catch((error) => {
        console.log(error);
        toastShow('error', error.message);
      });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeaderContainer {...{navigation}} />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '50%',
              height: 70,
            }}>
            <Image
              source={require('../../assets/images/car.png')}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              fontFamily: 'Segoe UI Semibold',
              color: '#0E5A93',
            }}>
            {isEdit ? 'Edit Car' : 'Add Car'}
          </Text>
        </View>
        <Formik
          initialValues={intialValues}
          validationSchema={commonValidationSchema}
          onSubmit={(values) => {
            if (isEdit) {
              handleUpdateCar({...values}, route.params.carDetail.id as string);
            } else {
              handleClose();
              setValues({...values});
            }
          }}>
          {({handleChange, errors, handleSubmit, values, setFieldValue}) => (
            <View style={{flex: 1, margin: 10}}>
              <TextInput
                placeholder="Car number"
                error={errors.registration_no && errors.registration_no}
                value={values.registration_no}
                onChangeText={handleChange('registration_no')}
                label="Car Number"
              />
              <VehicleType
                defaultValue={values.vehicle_category_id}
                onChangeItem={(data) => {
                  setFieldValue('vehicle_category_id', data);
                }}
              />
              <CarDrp
                items={VehicleFuel}
                defaultValue={values.fuel_type}
                placeholder="Vehicle Fuel"
                onChangeItem={(data) => {
                  setFieldValue('fuel_type', data);
                }}
              />
              <VehicleBrand
                defaultValue={values.vehicle_brand_id}
                onChangeItem={(data) => {
                  setFieldValue('vehicle_brand_id', data);
                }}
              />
              <VehicleModel
                brandId={values.vehicle_brand_id ? values.vehicle_brand_id : ''}
                defaultValue={values.vehicle_model_id}
                onChangeItem={(data) => {
                  setFieldValue('vehicle_model_id', data);
                }}
              />
              <TextInput
                value={values.year}
                onChangeText={handleChange('year')}
                placeholder="MFG Year"
                label="MFG Year"
              />
              <Button
                title={isEdit ? 'Update Car' : 'Add Car'}
                buttonStyle={{
                  marginTop: 15,
                  borderRadius: 10,
                  borderWidth: 2,
                }}
                onPress={handleSubmit.bind(this)}
                titleStyle={{
                  fontWeight: '700',
                  fontFamily: 'Segoe UI',
                }}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
      <CarNotificationAlert
        {...{visible, handleAddCar, handleClose, setPuc, setInsurance}}
      />
    </View>
  );
};
