import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import {BookingService, WalletService} from '../../api/services';
import {HeaderContainer} from '../../component/common/HeaderContainer';
import {RootStackParamList} from '../../utils/NavigationTypes';
import {toastShow} from '../../utils/Toast';
import {BookingParams, TransactionUpdateParams} from '../../utils/types';
import RazorpayCheckout from 'react-native-razorpay';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'BookingPaymentScreen'>;
};

export const BookingPaymentScreen: FC<Props> = ({navigation, route}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {wallet_amount, name, contact} = route.params.user;
  const {parking_id, amount} = route.params.booking;
  const isNeedToAdd = parseInt(amount) > parseInt(wallet_amount);
  const addWallet = parseInt(wallet_amount) - parseInt(amount);
  const [payAmount, setPayAount] = useState<string>(
    Math.sign(addWallet) === -1
      ? Math.abs(addWallet).toString()
      : addWallet.toString(),
  );
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleProceed = (type: 'pay' | 'add') => {
    if (type === 'pay') {
      addBooking(type);
    } else {
      addTransaction();
    }
  };

  const addBooking = (type: 'pay' | 'add') => {
    setLoading(true);
    BookingService.AddBooking({...route.params.booking, status: 'pending'})
      .then((result) => {
        setLoading(false);
        updateBooking({
          booking_id: result.data.id,
          status: 'booked',
          ...result.data,
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toastShow('error', err.message);
      });
  };

  const updateBooking = (data: BookingParams) => {
    setLoading(true);
    BookingService.UpdateBooking(data)
      .then((result) => {
        setLoading(false);
        navigation.navigate('Dashboard');
        toastShow('success', 'Parking Booked Successfully');
      })
      .catch((err) => {
        console.log(err);
        toastShow('error', err.message);
      });
  };

  const addTransaction = () => {
    WalletService.AddTransaction({amount: payAmount, source: 'razorpay'})
      .then((result) => {
        const orderId = JSON.parse(result.data.source_detail);
        const amount = parseInt(result.data.amount) * 100;
        var options = {
          description: 'Parkaro Wallet',
          currency: 'INR',
          key: 'rzp_test_yBaQF7yG5fTjsO',
          amount: amount,
          name: 'Parkaro',
          order_id: orderId.order_id, //Replace this with an order_id created using Orders API.
          prefill: {
            email: '',
            contact: contact,
            name: name,
          },
          readonly: {
            contact: true,
            email: true,
            name: true,
          },
        };
        RazorpayCheckout.open(options)
          .then((data: any) => {
            setLoading(false);
            addBooking('add');
            updateTransaction({
              id: result.data.id,
              source_detail: JSON.stringify({
                razorpay_order_id: data.razorpay_order_id,
                razorpay_payment_id: data.razorpay_payment_id,
                order_id: orderId.order_id,
                razorpay_signature: data.razorpay_signature,
              }),
              status: 'success',
            });
          })
          .catch((error: any) => {
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        toastShow('error', err.message);
      });
  };

  const updateTransaction = (data: TransactionUpdateParams) => {
    WalletService.UpdateTransaction(data)
      .then((result) => {
      })
      .catch((err) => {
        console.log(err);
        toastShow('error', err.message);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeaderContainer isProfile {...{navigation}} />
      <View style={{margin: 10}}>
        <View
          style={{
            marginTop: 15,
            marginHorizontal: 10,
            height: '30%',
          }}>
          <Text style={style.walletTitle}>Parkaro Wallet</Text>
          <Text style={style.subtitles}>
            Available Parkaro Balance ₹ {parseInt(wallet_amount).toFixed(2)}
          </Text>
          {isNeedToAdd && (
            <Text style={[style.subtitles, {marginTop: 10}]}>
              Amount to be paid: {amount}
            </Text>
          )}
          {isNeedToAdd && (
            <Text style={[style.subtitles]}>
              Your wallet don't have balance to booked. Please add remaining
              money to book parking.
            </Text>
          )}
        </View>
        {!isNeedToAdd ? (
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 10,
              height: '25%',
            }}>
            <Text style={style.title}>Money to Pay</Text>
            <Input
              inputContainerStyle={{
                borderBottomWidth: 0,
                marginTop: 10,
              }}
              inputStyle={{
                shadowColor: '#0655911A',
                shadowOpacity: 20,
                shadowRadius: 3.84,
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }}
              value={amount}
              disabled
              keyboardType="numeric"
              placeholder="Amount"
              leftIcon={{type: 'font-awesome', name: 'rupee'}}
            />
            <Button
              title="Proceed to Pay"
              buttonStyle={style.btnPick}
              loading={loading}
              onPress={() => handleProceed('pay')}
            />
          </View>
        ) : (
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 10,
              height: '25%',
            }}>
            <Text style={style.title}>Add Money</Text>
            <Input
              inputContainerStyle={{
                borderBottomWidth: 0,
                marginTop: 10,
              }}
              inputStyle={{
                shadowColor: '#0655911A',
                shadowOpacity: 20,
                shadowRadius: 3.84,
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }}
              value={payAmount}
              onChangeText={(text) => setPayAount(text)}
              keyboardType="numeric"
              placeholder="Amount"
              leftIcon={{type: 'font-awesome', name: 'rupee'}}
            />
            <Button
              title="Proceed"
              buttonStyle={style.btnPick}
              loading={loading}
              onPress={() => handleProceed('add')}
            />
          </View>
        )}
        <View
          style={{
            marginHorizontal: 10,
            height: '25%',
            marginTop: 10,
          }}>
          <Text style={style.title}> Manage Your Wallet</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '10%',
              }}>
              <Image
                source={require('../../assets/images/rupees.png')}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                borderBottomWidth: 1,
                borderBottomColor: '#dadada',
                paddingBottom: 10,
              }}>
              <Text style={style.subtitles}>Request Wallet Statement</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  btnPick: {
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
  walletTitle: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Segoe UI Bold',
  },
  subtitles: {
    fontSize: 15,
    fontFamily: 'Segoe UI',
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Segoe UI Semibold',
    color: '#000',
  },
});
