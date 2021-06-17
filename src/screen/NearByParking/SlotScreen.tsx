import {Picker} from '@react-native-picker/picker';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import moment from 'moment';
import React, {FC, useEffect} from 'react';
import {useState} from 'react';
import {BackHandler, Dimensions, View} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Button, Divider} from 'react-native-elements';
import WebView from 'react-native-webview';
import {NearByParkingService} from '../../api/services';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {CalendarView} from '../../component/NearByParking/CalendarView';
import {DateTimeDrp} from '../../component/NearByParking/DateTimeDropDown';
import {FloorSelections} from '../../component/NearByParking/FloorSelections';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {ParkingOptions} from '../../utils/types';
import {MapScreenStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MapScreen'>;
};

export const SlotScreen: FC<Props> = ({navigation, route}) => {
  const parking_id = route.params.parking_id;
  const [parkingOptions, setParkingOptions] = useState<ParkingOptions>();
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
    getParkingOptions();
    return BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, []);

  const getParkingOptions = () => {
    NearByParkingService.ParkingOptions(parking_id)
      .then((result) => {
        setParkingOptions(result.data);
      })
      .catch((err) => toastShow('error', err.message));
  };

  const handleChange = (item: string) => {
    console.log(item);
  };

  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      renderToHardwareTextureAndroid={true}>
      <HeaderContainer isMargin {...{navigation}} />
      <View>
        <FloorSelections floors={parkingOptions ? parkingOptions.floors : []} />
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
            justifyContent: 'space-between',
          }}>
          <CalendarView type="date" />
          <CalendarView type="time" />
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
          <DateTimeDrp onChangeItem={handleChange}>
            {/* {parkingOptions ? (
              parkingOptions.times.map((val) => {
                console.log(
                  moment
                    .utc(moment.duration(val, 'hours').asMinutes())
                    .format('mm'),
                );
                return (
                  <Picker.Item
                    label={val}
                    value={moment
                      .utc(moment.duration(val, 'hours').asMilliseconds())
                      .format('mm')}
                  />
                );
              })
            ) : ( */}
            <Picker.Item label={'1 Hour'} value={'0'} />
            {/* )} */}
          </DateTimeDrp>
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
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('PaymentScreen', {
              parking_id: parking_id,
              for_time: '120',
            });
          }}
          buttonStyle={MapScreenStyle.btnPick}
        />
      </View>
    </View>
  );
};
