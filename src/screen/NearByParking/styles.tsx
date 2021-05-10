import {StyleSheet} from 'react-native';

export const NearByParkingStyle = StyleSheet.create({
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  iconContainer: {
    opacity: 1,
    width: 40,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    margin: 5,
  },
  iconButtonStyle: {
    width: 40,
    height: 40,
    opacity: 1,
    borderRadius: 10,
  },
});

export const DetailStyle = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 17,
    color: '#000',
    marginTop: 10,
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
    fontSize: 15,
  },
});

export const MapScreenStyle = StyleSheet.create({
  btnPick: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
});

export const PaymentStyle = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 17,
    color: '#000',
    marginTop: 5,
  },
  billContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  billSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  billTitles: {
    fontFamily: 'Segoe UI Italic',
    fontSize: 16,
  },
  billPrice: {
    fontFamily: 'Segoe UI Italic',
    fontSize: 16,
  },
  btnPick: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
});
