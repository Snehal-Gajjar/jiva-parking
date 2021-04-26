import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/Dashboard/HeaderContainer';
import {ScanningStyle} from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const Scanning: FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <HeaderContainer title="Scanning" />
      <Card containerStyle={ScanningStyle.cardContainer}>
        <Card.Title style={ScanningStyle.cardTitle}>Scan QR Code</Card.Title>
        <Text style={ScanningStyle.cardSubTitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </Text>
      </Card>
      <View style={{
          marginTop:20,
          alignItems:'center',
          justifyContent:'center'
      }}>
        <QRCodeScanner
          onRead={(e) => console.log(e)}
          showMarker
          markerStyle={{
              height:'100%',
          }}
          cameraStyle={{
              height:300,
            //   marginTop:20,
          }}
        />
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
          containerStyle={ScanningStyle.torchContainer}></Button>
        <Button
          title="Scan Car QR"
          buttonStyle={ScanningStyle.scanButtonStyle}
          titleStyle={{
            marginLeft: 10,
            fontSize: 20,
          }}
          onPress={() => navigation.navigate('Scanning')}></Button>
      </View>
    </View>
  );
};
