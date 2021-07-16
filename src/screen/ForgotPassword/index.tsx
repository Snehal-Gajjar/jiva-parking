import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthService} from '../../api/services';
import {SocialLoginBtn} from '../../component/Login/SocialLoginBtn';
import {VerifyOtpModal} from '../../component/Login/VerifyOtpModal';
import {TextInput} from '../../component/TextInput';
import {CurrentUserContext} from '../../utils/context';
import {RootStackParamList} from '../../utils/NavigationTypes';
import storage from '../../utils/storage';
import {toastShow} from '../../utils/Toast';
import {commonValidationSchema, getInitialValue} from './initialValues';
import {FPStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const ForgotPassword: FC<Props> = ({navigation}) => {
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

  const handleVerifyOtp = () => {
    handleOtpModal();
    navigation.navigate('Dashboard');
  };

  const handleSubmit = (values: {phone: string}) => {
    // setLoading(true);
    console.log(values);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={FPStyle.logoContainer}>
        <View style={FPStyle.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
          />
        </View>
        <Text style={FPStyle.logoTxt}>Parkaro</Text>
      </View>
      <Formik
        initialValues={getInitialValue()}
        validationSchema={commonValidationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}>
        {({handleChange, errors, handleSubmit, values, touched}) => (
          <View style={FPStyle.bottomContainer}>
            <Text style={FPStyle.loginTile}>Log In</Text>
            <Text style={FPStyle.loginSubTile}>Log in to your account</Text>
            <TextInput
              iconType="feather"
              iconName="phone"
              placeholder="Phone Number"
              label="Phone"
              error={errors.phone && touched.phone ? errors.phone : undefined}
              value={values.phone}
              onChangeText={handleChange('phone')}
            />
            <Button
              title="Forgot Password"
              loading={loading}
              onPress={handleSubmit.bind(this)}
              buttonStyle={FPStyle.btnSignUp}
            />
            <View style={FPStyle.socialContainer}>
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
          </View>
        )}
      </Formik>
      <View style={FPStyle.forgotPswdContainer}>
        <Button
          type="clear"
          title="Already have account?"
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('Login');
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
          }}></Button>
        <View style={FPStyle.signupContainer}>
          <Text
            style={[
              FPStyle.loginSubTile,
              {
                fontSize: 17,
              },
            ]}>
            Don't have an account?
          </Text>
          <Text
            onPress={(e) => {
              e.preventDefault();
              navigation.navigate('SignUp');
            }}
            style={[
              FPStyle.loginTile,
              {
                fontSize: 15,
                marginBottom: 20,
                marginLeft: 5,
                color: '#0E5A93',
              },
            ]}>
            Sign Up
          </Text>
        </View>
      </View>
      <VerifyOtpModal
        {...{handleVerifyOtp}}
        visible={showOtpModal}
        handleClose={handleOtpModal}
      />
    </SafeAreaView>
  );
};
