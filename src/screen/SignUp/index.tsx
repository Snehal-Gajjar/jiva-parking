import {NavigationProp, NavigationState} from '@react-navigation/core';
import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../App';
import {SocialLoginBtn} from '../../component/Login/SocialLoginBtn';
import {VerifyOtpModal} from '../../component/Login/VerifyOtpModal';
import {TextInput} from '../../component/TextInput';
import {SignUpStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const SignUp: FC<Props> = ({navigation}) => {
  const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
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

  return (
    <SafeAreaView style={{flex: 1}}>
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
      <View style={SignUpStyle.bottomContainer}>
        <Text style={SignUpStyle.loginTile}>Get Started</Text>
        <Text style={SignUpStyle.loginSubTile}>Let's create your account</Text>
        <TextInput
          iconType="feather"
          iconName="user"
          label="Full Name"
          placeholder="Name"
        />
        <TextInput
          iconType="feather"
          iconName="phone"
          label="Phone"
          placeholder="Phone"
        />
        <TextInput
          iconType="feather"
          iconName="mail"
          placeholder="Email"
          label="Email"
        />
        <TextInput
          iconType="feather"
          iconName="lock"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />
        <TextInput
          iconType="feather"
          iconName="lock"
          placeholder="Confirm Password"
          label="Confirm Password"
          secureTextEntry
        />
        <Button
          title="Get Started"
          onPress={handleOtpModal}
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
      </View>
      <View style={SignUpStyle.forgotPswdContainer}>
        <Text style={[SignUpStyle.loginSubTile]}>Have an account ?</Text>
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
      <VerifyOtpModal
        {...{handleVerifyOtp}}
        visible={showOtpModal}
        handleClose={handleOtpModal}
      />
    </SafeAreaView>
  );
};