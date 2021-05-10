import {StyleSheet} from 'react-native';

export const ScanningStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#c5e3fa',
    borderRadius: 20,
    padding: 10,
    height: '20%',
    marginTop: 10,
  },
  cardTitle: {
    color: '#000',
    fontFamily: 'Segoe UI Bold',
    textTransform: 'none',
    fontSize: 19,
    marginBottom: 5
  },
  cardSubTitle: {
    color: '#000',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    padding:5,
    textAlign: 'center',
  },
  scanBtnContainer: {
    position: 'absolute',
    bottom: 10 ,
    right: 0,
    left: 0,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  scanButtonStyle: {
    height: 60,
    width:'50%',
    borderRadius: 30,
    marginTop: 10,
    fontWeight:'400',
    textAlign:'center'
  },
  torchContainer:{
    width: 50,
    height: 50,
    borderRadius: 35,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10
  },
  torchButtonStyle:{
    backgroundColor: 'transparent',
    width: 30,
    alignItems:'center'
  },
  btnImage:{
    width:30,
    height:30
}
});
