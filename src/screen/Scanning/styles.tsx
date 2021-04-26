import {StyleSheet} from 'react-native';

export const ScanningStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#c5e3fa',
    borderRadius: 20,
    padding: 20,
    height: '20%',
    marginTop: 30,
  },
  cardTitle: {
    color: '#000',
    fontFamily: 'Segoe UI Bold',
    textTransform: 'none',
    fontSize: 22,
    marginBottom: 10,
  },
  cardSubTitle: {
    color: '#000',
    fontFamily: 'Segoe UI',
    fontSize: 18,
    textAlign: 'center',
  },
  scanBtnContainer: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  scanButtonStyle: {
    height: 60,
    width:'100%',
    borderRadius: 30,
    marginTop: 25,
    fontWeight:'400',
  },
  torchContainer:{
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 30
  },
  torchButtonStyle:{
    backgroundColor: 'transparent',
    width: 30,
    alignItems:'center'
  },
  btnImage:{
    width:40,
    height:40
}
});
