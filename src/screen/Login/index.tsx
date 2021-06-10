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
import {LoginStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Login: FC<Props> = ({navigation}) => {
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

  const handleSubmit = (values: {phone: string; password: string}) => {
    setLoading(true);
    AuthService.LoginUser(values)
      .then((result) => {
        console.log(`ASTHA ${JSON.stringify(result)}`);
        const {
          data: {token},
        } = result;
        storage.clearMap();
        storage.save({
          key: 'user',
          data: JSON.stringify({token, isUserLoggedIn: true}),
        });

        toastShow('success', result.message);
        context.handleUser();
        navigation.navigate('Dashboard');
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
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={LoginStyle.logoContainer}>
        <View style={LoginStyle.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
          />
        </View>
        <Text style={LoginStyle.logoTxt}>Parkaro</Text>
      </View>
      <Formik
        initialValues={getInitialValue()}
        validationSchema={commonValidationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}>
        {({handleChange, errors, handleSubmit, values}) => (
          <View style={LoginStyle.bottomContainer}>
            <Text style={LoginStyle.loginTile}>Log In</Text>
            <Text style={LoginStyle.loginSubTile}>Log in to your account</Text>
            <TextInput
              iconType="feather"
              iconName="phone"
              placeholder="Phone Number"
              label="Phone"
              error={errors.phone && errors.phone}
              value={values.phone}
              onChangeText={handleChange('phone')}
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
            <Button
              title="Log In"
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={LoginStyle.btnSignUp}
            />
            <View style={LoginStyle.socialContainer}>
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
      <View style={LoginStyle.forgotPswdContainer}>
        <Button
          type="clear"
          title="Forgot Password?"
          buttonStyle={{
            backgroundColor: 'transparent',
          }}></Button>
        <View style={LoginStyle.signupContainer}>
          <Text
            style={[
              LoginStyle.loginSubTile,
              {
                fontSize: 17,
              },
            ]}>
            Don't have an account?
          </Text>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={[
              LoginStyle.loginTile,
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
