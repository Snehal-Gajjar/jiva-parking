import {StyleSheet} from 'react-native';

export const ProfileStyle = StyleSheet.create({
  profileContianer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    marginTop: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  phoneTxt: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
  profiletitle: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Segoe UI Semibold',
  },
  title: {
    marginTop: 5,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Segoe UI Semibold',
  },
  iconContianer: {
    width: '50%',
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainiconcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
    width: '100%',
  },
  iconCircle: {
    height: 40,
    width: 40,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
  },
});
