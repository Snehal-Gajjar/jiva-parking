import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native-elements';

export const AmenitiesList: FC = () => {
  return (
    <View style={style.container}>
      <View style={style.item}>
        <Icon name="eye-off-outline" type="ionicon" size={25} />
        <Text style={style.itemText}>Disable Support</Text>
      </View>
      <View style={style.item}>
        <Icon name="charging-station" type="font-awesome-5" size={25} />
        <Text style={style.itemText}>EV Charge Point</Text>
      </View>
      <View style={style.item}>
        <Icon name="cctv" type="material-community" size={25} />
        <Text style={style.itemText}>CCTV Surveillance</Text>
      </View>
      <View style={style.item}>
        <Icon name="roofing" type="material" size={25} />
        <Text style={style.itemText}>Roof Parking</Text>
      </View>
      <View style={style.item}>
        <Image
          style={style.itemImage}
          source={require('../../assets/images/parking-barrier.png')}
        />
        <Text style={style.itemText}>Parking Barrier</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  item: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 3,
  },
  itemText: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    marginLeft: 7,
  },
  itemImage: {
    width: 20,
    height: 20,
  },
});
