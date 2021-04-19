import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../App';
import {SocialLoginBtn} from '../../component/Login/SocialLoginBtn';
import {TextInput} from '../../component/TextInput';
import {LoginStyle} from './style';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Login: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
      <View style={LoginStyle.bottomContainer}>
        <Text style={LoginStyle.loginTile}>Log In</Text>
        <Text style={LoginStyle.loginSubTile}>Log in to your account</Text>
        <TextInput
          iconType="feather"
          iconName="phone"
          placeholder="Phone Number"
          label="Phone"
        />
        <TextInput
          iconType="feather"
          iconName="lock"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />
        <Button title="Log In" buttonStyle={LoginStyle.btnSignUp} />
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
    </SafeAreaView>
  );
};
