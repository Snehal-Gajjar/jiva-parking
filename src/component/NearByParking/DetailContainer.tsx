import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import {ServiceImageList} from '../../utils/ServiceImageList';

type Props = {
  showService?: boolean;
};

export const DetailContainer: FC<Props> = ({showService}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.textTitle}>Raypur Gomtipur, Road</Text>
          <View style={styles.placeContainer}>
            <Icon
              name="map-pin"
              type="feather"
              size={16}
              style={{
                marginRight: 5,
              }}
              color="#8193ae"
            />
            <Text style={styles.textSubTitle}>Raypur Gomtipur,Road</Text>
          </View>
        </View>
        <View style={[styles.subtitleContainer, {alignItems: 'center'}]}>
          <Text style={styles.textTitle}>50 ₹</Text>
          <Text style={styles.textSubTitle}>per hour</Text>
        </View>
      </View>
      <View style={styles.distanceContainer}>
        <View style={[styles.spotsContainer, {marginRight: 15}]}>
          <Button
            raised
            buttonStyle={[styles.iconButtonStyle]}
            icon={
              <Icon
                name="walking"
                color="#FFFFFF"
                type="font-awesome-5"
                size={26}
              />
            }
            containerStyle={styles.iconContainer}></Button>
          <Text style={[styles.detailText, {color: '#0f2e5c'}]}>800m away</Text>
        </View>
        <View style={styles.spotsContainer}>
          <Button
            raised
            buttonStyle={[styles.iconButtonStyle]}
            icon={
              <Image
                source={require('../../assets/images/parking-area.png')}
                style={styles.btnImage}></Image>
            }
            containerStyle={styles.iconContainer}></Button>
          <Text style={[styles.detailText, {color: '#04ad5f'}]}>15 spots</Text>
        </View>
      </View>
      {!showService && <View style={styles.serviceImageContainer}>
        {(Object.keys(
          ServiceImageList,
        ) as (keyof typeof ServiceImageList)[]).map((name) => (
          <Image
            key={name}
            style={{
              height: 25,
              width: 25,
              marginRight: 10,
            }}
            source={ServiceImageList[name].image}></Image>
        ))}
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'Segoe UI Bold',
    color: '#000000',
    fontSize: 18,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSubTitle: {
    fontFamily: 'Segoe UI',
    color: '#8193ae',
    fontSize: 16,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    margin: 5,
  },
  iconButtonStyle: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0E5A93',
  },
  btnImage: {
    width: 27,
    height: 27,
  },
  distanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 4,
  },
  spotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    fontFamily: 'Segoe UI',
    fontSize: 18,
    marginLeft: 5,
  },
  serviceImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
