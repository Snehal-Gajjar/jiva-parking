import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {FC, useEffect} from 'react';
import {BackHandler, Dimensions, View} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Button, Divider} from 'react-native-elements';
import WebView from 'react-native-webview';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {CalendarView} from '../../component/NearByParking/CalendarView';
import {DateTimeDrp} from '../../component/NearByParking/DateTimeDropDown';
import {FloorSelections} from '../../component/NearByParking/FloorSelections';
import { NearByRootParamList } from '../../utils/NavigationTypes';
import {MapScreenStyle} from './styles';

type Props = {
  navigation: DrawerNavigationProp<NearByRootParamList>;
};

const dateDrp = [
  {label: '04-04-2021', value: '04-04-2021'},
  {label: '05-04-2021', value: '05-04-2021'},
  {label: '06-04-2021', value: '06-04-2021'},
  {label: '07-04-2021', value: '07-04-2021'},
  {label: '08-04-2021', value: '08-04-2021'},
];

const timeDrp = [
  {label: '04:00 AM', value: '04:00 AM'},
  {label: '05:00 AM', value: '05:00 AM'},
  {label: '06:00 AM', value: '06:00 AM'},
  {label: '07:00 AM', value: '07:00 AM'},
  {label: '08:00 AM', value: '08:00 AM'},
];

const hourDrp = [
  {label: '1 hour', value: '1'},
  {label: '3 hour', value: '3'},
  {label: '4 hour', value: '4'},
  {label: '5 hour', value: '5'},
];
export const SlotScreen: FC<Props> = ({navigation}) => {
  const WEBVIEW_REF = React.createRef<WebView>();
  const backHandler = () => {
    WEBVIEW_REF.current?.goBack();
    return true;
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    BackHandler.addEventListener('hardwareBackPress', backHandler);

    return BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, []);

  const handleChange = (item: string) => {
    console.log(item);
  };

  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      renderToHardwareTextureAndroid={true}>
      <HeaderContainer isMargin {...{navigation}} />
      <View>
        <FloorSelections />
      </View>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
        }}
        renderToHardwareTextureAndroid={true}>
        <Divider style={{backgroundColor: '#065591'}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CalendarView />
          {/* <DateTimeDrp
            items={dateDrp}
            defaultValue="04-04-2021"
            onChangeItem={handleChange}
          /> */}
          {/* <DateTimeDrp
            items={timeDrp}
            defaultValue="04:00 AM"
            onChangeItem={handleChange}
          /> */}
          <DateTimeDrp
            items={hourDrp}
            defaultValue="1"
            onChangeItem={handleChange}
          />
        </View>
        <Divider style={{backgroundColor: '#065591'}} />
        <View
          style={{
            marginTop: 10,
            height: Dimensions.get('screen').height - 50,
          }}
          renderToHardwareTextureAndroid={true}>
          <WebView
            ref={WEBVIEW_REF}
            source={{uri: 'http://parkaro.orbitz.tech/api'}}
            incognito
            androidHardwareAccelerationDisabled={true}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          margin: 10,
        }}>
        <Button
          title="Proceed with Spot (G-1P)"
          onPress={() => navigation.navigate('PaymentScreen')}
          buttonStyle={MapScreenStyle.btnPick}
        />
      </View>
    </View>
  );
};
