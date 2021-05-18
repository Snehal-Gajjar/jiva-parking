import {StyleSheet} from 'react-native';

export const HeaderStyle = StyleSheet.create({
  iconContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle:{
    fontFamily: 'Segoe UI Semibold',
    color: '#0E5A93',
    fontSize: 19,
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  torchContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: 'flex',
  },
  torchButtonStyle: {
    backgroundColor: 'transparent',
  },
  btnImage: {
    width: 40,
    height: 40,
  },
});
