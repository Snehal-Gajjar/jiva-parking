import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC, useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {AuthService} from '../../api/services';
import {SocialLoginBtn} from '../../component/Login/SocialLoginBtn';
import {VerifyOtpModal} from '../../component/Login/VerifyOtpModal';
import {TextInput} from '../../component/TextInput';
import Config from '../../utils/apiConfig';
import {CurrentUserContext} from '../../utils/context';
import {RootStackParamList} from '../../utils/NavigationTypes';
import storage from '../../utils/storage';
import {toastShow} from '../../utils/Toast';
import {Register} from '../../utils/types';
import {commonValidationSchema, getInitialValue} from './initialValues';
import {SignUpStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const SignUp: FC<Props> = ({navigation}) => {
  const context = useContext(CurrentUserContext);
  const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleOtpModal = () => {
    setShowOtpModal(!showOtpModal);
  };

  const handleVerifyOtp = (otp?: string) => {
    if (otp && otp === Config.MASTER_OTP.toString()) {
      handleOtpModal();
      navigation.navigate('Drawer');
    }
  };

  const handleSubmit = (values: Register) => {
    setLoading(true);
    AuthService.RegisterUser(values)
      .then((result) => {
        console.log(`ASTHA ${JSON.stringify(result)}`);
        const {
          data: {token},
        } = result;
        // storage.clearMap();
        storage.save({
          key: 'user',
          data: JSON.stringify({token, isUserLoggedIn: true}),
        });
        context.handleUser();
        toastShow('success', result.message);
        handleOtpModal();
        setLoading(false);
      })
      .catch((error) => {
        console.log('astha 3');
        console.log(error);
        setLoading(false);
        toastShow('error', error.message);
      });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={SignUpStyle.logoContainer}>
          <View style={SignUpStyle.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
              }}
            />
          </View>
          <Text style={SignUpStyle.logoTxt}>Parkaro</Text>
        </View>
        <Formik
          initialValues={getInitialValue()}
          validationSchema={commonValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit(values);
          }}>
          {({handleChange, errors, handleSubmit, values}) => (
            <View style={SignUpStyle.bottomContainer}>
              <Text style={SignUpStyle.loginTile}>Get Started</Text>
              <Text style={SignUpStyle.loginSubTile}>
                Let's create your account
              </Text>
              <TextInput
                iconType="feather"
                iconName="user"
                label="Full Name"
                placeholder="Name"
                error={errors.full_name && errors.full_name}
                value={values.full_name}
                onChangeText={handleChange('full_name')}
              />
              <TextInput
                iconType="feather"
                iconName="phone"
                label="Phone"
                placeholder="Phone"
                error={errors.phone && errors.phone}
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              <TextInput
                iconType="feather"
                iconName="mail"
                placeholder="Email"
                label="Email"
                error={errors.email && errors.email}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <TextInput
                iconType="feather"
                iconName="lock"
                placeholder="Password"
                label="Password"
                secureTextEntry
                error={errors.password && errors.password}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <TextInput
                iconType="feather"
                iconName="lock"
                placeholder="Confirm Password"
                label="Confirm Password"
                secureTextEntry
                error={
                  errors.password_confirmation && errors.password_confirmation
                }
                value={values.password_confirmation}
                onChangeText={handleChange('password_confirmation')}
              />
              <Button
                title="Get Started"
                loading={loading}
                onPress={handleSubmit}
                buttonStyle={SignUpStyle.btnSignUp}
              />
              <View style={SignUpStyle.socialContainer}>
                <SocialLoginBtn
                  iconName="facebook"
                  iconType="feather"
                  title="Login with Facebook"
                />
                <SocialLoginBtn
                  iconName="social-google"
                  iconType="simple-line-icon"
                  title="Login with Google"
                />
              </View>
              <View style={SignUpStyle.forgotPswdContainer}>
                <Text style={[SignUpStyle.loginSubTile]}>
                  Have an account ?
                </Text>
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={[
                    SignUpStyle.loginTile,
                    {
                      // marginBottom: 15,
                      marginLeft: 5,
                      color: '#0E5A93',
                    },
                  ]}>
                  Log In
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <VerifyOtpModal
        {...{handleVerifyOtp}}
        visible={showOtpModal}
        handleClose={handleOtpModal}
      />
    </View>
  );
};
