import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    height: '30%',
    width: '110%',
    marginLeft: -19,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 20,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  logoTxt: {
    fontSize: 25,
    color: '#0E5A93',
    fontFamily: 'Segoe UI Bold',
    marginTop: 5,
  },
  detailContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardTxt: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Segoe UI',
    fontWeight: '500',
    marginTop: 5,
  },
  subDetailTxt: {
    fontSize: 15,
    color: 'grey',
    fontFamily: 'Segoe UI',
    marginTop: 5,
    margin: 20,
    textAlign: 'center',
  },
  scanButtonStyle: {
    // marginStart: 10,
    marginHorizontal: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 25,
  },
});
