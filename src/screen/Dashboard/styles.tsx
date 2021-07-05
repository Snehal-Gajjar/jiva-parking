import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    height: '30%',
    width: '101%',
    marginLeft: -2,
    borderBottomLeftRadius: 240,
    borderBottomRightRadius: 240,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth:0.5,
    borderColor:'#0655911A',
    shadowColor: '#0655911A',
    shadowOpacity: 0.1,
    elevation:5,
    shadowRadius: 10,
    shadowOffset: {
      width: 9,
      height: 9,
    },
  },
  logoTxt: {
    fontSize: 19,
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    marginTop: 5,
  },
  detailContainer: {
    marginTop: 15,
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
    height: 55,
    borderRadius: 30,
    marginTop: 15,
  },
});
