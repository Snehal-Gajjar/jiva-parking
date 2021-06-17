import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native-animatable';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';

export const QRCodeModal = ({qrvisible, handleQRClose, id, carName, carNo}) => {
  let ref;
  getDataURL = () => {
    ref.toDataURL(this.callback);
  };

  callback = (dataURL) => {
    let shareImageBase64 = {
      title: 'Car Info',
      url: `data:image/png;base64,${dataURL}`,
      subject: 'Parkaro QR Code', //  for email
    };
    Share.open(shareImageBase64).catch(error => console.log(error));
  };

  return (
    <Modal
      testID={'modal'}
      isVisible={qrvisible}
      onSwipeComplete={handleQRClose}
      hasBackdrop={true}
      style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, {color: '#000', fontSize: 17}]}>
            QR Code of {carName + ' - ' + carNo}
          </Text>
          <Icon
            name="close"
            onPress={handleQRClose.bind(this)}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View
          style={{
            margin: 10,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}>
          <QRCode
            value={JSON.stringify(id)}
            size={150}
            logo={require('../../../assets/images/logo.png')}
            logoSize={30}
            color="#0E5A93"
            logoBackgroundColor="transparent"
            getRef={(c) => (ref = c)}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center'
          }}>
          <Button
            title="Share QR Code"
            buttonStyle={styles.btnLogIn}
            onPress={getDataURL.bind(this)}
          />
        </View>
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
  btnLogIn: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
    marginBottom: 10,
    marginRight: 10,
  },
});
