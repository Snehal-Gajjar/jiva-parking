import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Button, Divider} from 'react-native-elements';
import {RootStackParamList} from '../../../App';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {DateTimeDrp} from '../../component/NearByParking/DateTimeDropDown';
import {FloorSelections} from '../../component/NearByParking/FloorSelections';
import {MapScreenStyle} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
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
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleChange = (item: ItemType) => {
    console.log(item.value);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderContainer isMargin />
      <View>
        <FloorSelections />
      </View>
      <View
        style={{
          margin: 15,
        }}>
        <Divider style={{backgroundColor: '#065591'}} />
        <View
          style={{
            zIndex: 999,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <DateTimeDrp
            items={dateDrp}
            defaultValue="04-04-2021"
            onChangeItem={handleChange}
          />
          <DateTimeDrp
            items={timeDrp}
            defaultValue="04:00 AM"
            onChangeItem={handleChange}
          />
          <DateTimeDrp
            items={hourDrp}
            defaultValue="1"
            onChangeItem={handleChange}
          />
        </View>
        <Divider style={{backgroundColor: '#065591', marginTop: 10}} />
        <Button
          title="Proceed with Spot (G-1P)"
          onPress={() => navigation.navigate('PaymentScreen')}
          buttonStyle={MapScreenStyle.btnPick}
        />
      </View>
    </View>
  );
};
