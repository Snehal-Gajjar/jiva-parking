import {StyleSheet} from 'react-native';

export const SignUpStyle = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '17%',
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
    fontSize: 21,
    color: '#0E5A93',
    fontFamily: 'Segoe UI Bold',
    marginTop: 5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '7%',
    display: 'flex',
    left: 0,
    right: 0,
    margin: 15,
  },
  btnSignUp: {
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    height:55,
    fontSize:15
  },
  loginTile:{
    fontFamily:'Segoe UI Bold',
    fontSize: 17
  },
  loginSubTile:{
    fontFamily:'Segoe UI',
    fontSize: 15,
    marginBottom: 20,
    color:'#707070'
  },
  socialContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15
  },
  forgotPswdContainer:{
    position:'absolute',
    bottom:10,
    right:0,
    left:0,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
});
