import {StyleSheet} from 'react-native';

export const CarItemStyle = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carNumberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  carImageContainer: {
    height: 90,
    width: '65%',
  },
  deleteContainer:{
    width: 40,
    height: 40,
    borderRadius: 35,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:-16, 
    right:-16,
  },
  deleteButtonStyle:{
    backgroundColor: '#0E5A93',
    borderRadius: 35,
  },
});
