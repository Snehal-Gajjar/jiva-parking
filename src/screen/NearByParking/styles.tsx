import {StyleSheet} from 'react-native';

export const NearByParkingStyle = StyleSheet.create({
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'#fff'
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
  },
});

export const DetailStyle = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 18,
    color: '#000',
    marginTop: 15,
  },
  subDetail: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    marginTop: 5,
    color: '#8294ad',
  },
  btnPick: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
  },
});

export const MapScreenStyle = StyleSheet.create({
  btnPick: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
  },
});

export const PaymentStyle = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  billContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  billSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  billTitles: {
    fontFamily: 'Segoe UI Italic',
    fontSize: 18,
  },
  billPrice: {
    fontFamily: 'Segoe UI Italic',
    fontSize: 18,
  },
  btnPick: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
  },
});
