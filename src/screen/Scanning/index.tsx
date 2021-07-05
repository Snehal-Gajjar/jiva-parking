import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {ScanningStyle} from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QrCodeCamera from '../../component/Dashboard/QrCodeCamera';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import Torch from "react-native-torch";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Scanning: FC<Props> = ({navigation}) => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderContainer title="Scanning" {...{navigation}} />
      <Card containerStyle={ScanningStyle.cardContainer}>
        <Card.Title style={ScanningStyle.cardTitle}>Scan QR Code</Card.Title>
        <Text style={ScanningStyle.cardSubTitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
      </Card>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
        {/* <QRCodeScanner
          onRead={(e) => console.log(e)}
          showMarker
          markerStyle={{
              height:'90%',
          }}
          cameraStyle={{
              height:150,
            //   marginTop:20,
          }}
        /> */}
        <QrCodeCamera />
      </View>
      <View style={ScanningStyle.scanBtnContainer}>
        <Button
          raised
          buttonStyle={ScanningStyle.torchButtonStyle}
          icon={
            <Image
              source={require('../../assets/images/torch.png')}
              style={ScanningStyle.btnImage}></Image>
          }
          onPress={handlePress}
          containerStyle={ScanningStyle.torchContainer}></Button>
        <Button
          title="Scan Car QR"
          buttonStyle={ScanningStyle.scanButtonStyle}
          containerStyle={{
            width: '60%',
          }}
          titleStyle={{
            fontSize: 20,
            alignItems: 'center',
            textAlign: 'center',
          }}
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('Scanning');
          }}></Button>
      </View>
    </View>
  );
};
