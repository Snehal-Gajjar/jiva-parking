import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import Modal from 'react-native-modal';
import TextInputMask from 'react-native-text-input-mask';
import Config from '../../utils/apiConfig';

type Props = {
  visible: boolean;
  handleClose: () => void;
  handleVerifyOtp: (otp?: string) => void;
};

export const VerifyOtpModal: FC<Props> = ({
  visible,
  handleClose,
  handleVerifyOtp,
}) => {
  const [otp, setOtp] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleOTPVerify = () => {
    setLoading(true);
    if (otp && otp.length === 6) {
      handleVerifyOtp(otp);
      setLoading(false);
    } else {
      if (otp !== Config.MASTER_OTP.toString()) {
        setLoading(false);
        setError('OTP is invalid.');
      } else {
        setLoading(false);
        setError('OTP is required.');
      }
    }
  };
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={handleClose}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.titleModal}>Verify your number with OTP</Text>
        <View style={styles.otpSection}>
          {/* <Icon
            style={styles.otpIcon}
            name="ios-search"
            size={20}
            color="#000"
          /> */}
          <Image
            style={styles.otpIcon}
            source={require('../../assets/images/otp.png')}></Image>
          <TextInputMask
            style={styles.otpInput}
            placeholder="3-4-5-6-7-8"
            onChangeText={(formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890
              setOtp(extracted);
            }}
            value={otp}
            mask={'[0]-[0]-[0]-[0]-[0]-[0]'}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            color: 'red',
            fontFamily: 'Segoe UI',
          }}>
          {error}
        </Text>
        <Button
          loading={loading}
          title="Verfiy OTP"
          buttonStyle={styles.btnLogIn}
          onPress={handleOTPVerify}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(14, 90, 147, 0.3)',
  },
  container: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    opacity: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnLogIn: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
  },
  titleModal: {
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  otpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    height: 55,
  },
  otpInput: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize: 17,
    height: 50,
    fontFamily: 'Segoe UI Semibold',
  },
  otpIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
