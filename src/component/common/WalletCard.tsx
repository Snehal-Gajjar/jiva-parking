import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const WalletCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Segoe UI',
            textTransform: 'capitalize',
          }}>
          BALANCE
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontFamily: 'Segoe UI Semibold',
            textTransform: 'capitalize',
          }}>
          ₹ 5000
        </Text>
      </View>
      <View style={styles.addContainer}>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: 'center',
            padding: 5,
            backgroundColor: 'white',
          }}>
          <Icon name="plus" size={20} type="feather" color="#065591" />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontFamily: 'Segoe UI',
          }}>
          Add Money
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
  },
  balanceContainer: {
    padding: 15,
    width: '60%',
    backgroundColor: '#065591',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  addContainer: {
    padding: 15,
    width: '40%',
    backgroundColor: '#0e78cc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
});
