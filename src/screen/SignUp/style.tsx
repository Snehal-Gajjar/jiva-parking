import {StyleSheet} from 'react-native';

export const SignUpStyle = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 20,
    shadowColor: '#0655911A',
    shadowOpacity: 20,
    shadowRadius: 3.84,
    marginTop: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPswdContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
