import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import Modal from 'react-native-modal';
import TextInputMask from 'react-native-text-input-mask';

type Props = {
  visible: boolean;
  handleClose: () => void;
  handleVerifyOtp:() => void;
};

export const VerifyOtpModal: FC<Props> = ({visible, handleClose, handleVerifyOtp}) => {
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
            }}
            mask={'[0]-[0]-[0]-[0]-[0]-[0]'}
            underlineColorAndroid="transparent"
          />
        </View>

        <Button title="Log In" buttonStyle={styles.btnLogIn} onPress={handleVerifyOtp} />
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
    opacity:1,
    height: '30%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnLogIn: {
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    height: 55,
    fontSize: 15,
  },
  titleModal: {
    color: '#0E5A93',
    fontFamily: 'Segoe UI Bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  otpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius:10
  },
  otpInput: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize:17,
    fontFamily: 'Segoe UI Bold',
  },
  otpIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
