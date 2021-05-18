import {StyleSheet} from 'react-native';

export const SignUpStyle = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    marginTop:10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  logoTxt: {
    fontSize: 20,
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    marginTop: 5,
  },
  bottomContainer: {
    // position: 'absolute',
    // bottom: '5%',
    // display: 'flex',
    // left: 0,
    // right: 0,
    margin: 15,
  },
  btnSignUp: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
  loginTile: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 15,
  },
  loginSubTile: {
    fontFamily: 'Segoe UI',
    fontSize: 15,
    color: '#707070',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPswdContainer: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
