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
import Config from '../../utils/apiConfig';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {ParkingOptions} from '../../utils/types';
import {MapScreenStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MapScreen'>;
};

export const SlotScreen: FC<Props> = ({navigation, route}) => {
  const {parking_id, lat, long} = route.params;
  const [floor_id, setFloorId] = useState<string>('');
  const [spot_id, setSpot_id] = useState<string>('0');
  const [is_vip, setIs_vip] = useState<'0' | '1'>('0');
  const [for_date, setfor_date] = useState<string>(
    moment(new Date()).format('YYYY/MM/DD'),
  );
  const [for_time, setfor_time] = useState<string>('60');
  const [from_time, setfrom_time] = useState<string>(
    moment(new Date()).format('hh:mm'),
  );
  const [parkingOptions, setParkingOptions] = useState<ParkingOptions>();
  const WEBVIEW_REF = React.createRef<WebView>();
  const backHandler = () => {
    WEBVIEW_REF.current?.goBack();
    return true;
  };

  const runFirst = `
  (function() {
    document.dispatchEvent(new MessageEvent('message', {
      data: ${JSON.stringify({
        parking_id: parking_id,
        floor_no: floor_id,
        for_time: for_time,
        from_time,
        for_date,
      })}
    }));
  })();
  true; // note: this is required, or you'll sometimes get silent failures
  `;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    console.log(Config.REST_ENDPOINT + `?&parking_id=${parking_id}`);
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    getParkingOptions();
    return BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, []);

  const getParkingOptions = () => {
    NearByParkingService.ParkingOptions(parking_id)
      .then((result) => {
        console.log(result);
        setParkingOptions(result.data);
      })
      .catch((err) => toastShow('error', err.message));
  };

  const handleChange = (item: string) => {
    setfor_time(item);
    WEBVIEW_REF.current?.reload();
  };

  const onMessage = (data: any) => {
    // alert(data.nativeEvent.data);
    const slotData = JSON.parse(data.nativeEvent.data);
    setSpot_id(slotData.cell_presentation_id);
    setIs_vip(slotData.is_vip);
    console.log(data.nativeEvent.data);
    // {"row":2,"cell":1,"cell_id":"4-2-1","cell_presentation_id":"421","is_vip":1}
    // props.navigation.navigate("Home");
  };

  const handleFloorId = (id: string) => {
    setFloorId(id);
    WEBVIEW_REF.current?.reload();
  };

  const handleDateTime = (type: 'date' | 'time', date: Date) => {
    if (type === 'date') {
      setfor_date(moment(date).format('YYYY/MM/DD'));
      WEBVIEW_REF.current?.reload();
    } else {
      setfrom_time(moment(date).format('hh:mm'));
      WEBVIEW_REF.current?.reload();
    }
  };

  return (
    <View
      style={{flex: 1, backgroundColor: '#fff'}}
      renderToHardwareTextureAndroid={true}>
      <HeaderContainer isMargin {...{navigation}} />
      <View>
        <FloorSelections
          floors={parkingOptions ? parkingOptions.floors : []}
          handleFloorId={handleFloorId}
        />
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
          <CalendarView type="date" handleDateTime={handleDateTime} />
          <CalendarView type="time" handleDateTime={handleDateTime} />
          <DateTimeDrp
            items={parkingOptions?.times}
            onChangeItem={handleChange}></DateTimeDrp>
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
            source={{uri: Config.REST_ENDPOINT + `?&parking_id=${parking_id}`}}
            incognito
            androidHardwareAccelerationDisabled={true}
            injectedJavaScriptBeforeContentLoaded={`
            window.onerror = function(message, sourcefile, lineno, colno, error) {
              alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
              return true;
            };
            true;
          `}
            injectedJavaScript={`
            (function() {
              document.dispatchEvent(new MessageEvent('message', {
                data: ${JSON.stringify({
                  parking_id: parking_id,
                  floor_no: floor_id,
                  for_time: for_time,
                  from_time,
                  for_date,
                })}
              }));
            })();
            true; // note: this is required, or you'll sometimes get silent failures
            `}
            onMessage={onMessage}
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
          title={`Proceed with Spot (${floor_id}-${spot_id})`}
          onPress={(e) => {
            e.preventDefault();
            navigation.navigate('PaymentScreen', {
              parking_id: parking_id,
              for_time: for_time,
              floor_id: floor_id,
              for_date: for_date,
              from_time: from_time,
              spot_id: spot_id,
              is_vip: is_vip,
              lat,
              long,
            });
          }}
          buttonStyle={MapScreenStyle.btnPick}
        />
      </View>
    </View>
  );
};
