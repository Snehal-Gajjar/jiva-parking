import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import {HeaderContainer} from '../component/common/HeaderContainer';
import {RootStackParamList} from '../utils/NavigationTypes';
import RazorpayCheckout from 'react-native-razorpay';
import {WalletService} from '../api/services';
import {useState} from 'react';
import {toastShow} from '../utils/Toast';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionUpdateParams} from '../utils/types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'WalletPaymentScreen'>;
};

export const WalletPaymentScreen: FC<Props> = ({navigation, route}) => {
  const [payAmount, setPayAount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {wallet_amount, name, contact} = route.params.user;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleProceed = () => {
    setLoading(true);
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
            // handle failure
            // alert(`Error: ${error.code} | ${error.description}`);
          });
      })
      .catch((err) => {
        setLoading(false);
        toastShow('error', err.message);
      });
  };

  const updateTransaction = (data: TransactionUpdateParams) => {
    WalletService.UpdateTransaction(data)
      .then((result) => {
        if (result.data === 1) {
          navigation.navigate('Wallet');
        }
        toastShow('success', 'Payment Successfully done!');
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
        </View>
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
            onPress={handleProceed}
          />
        </View>
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
                source={require('../assets/images/rupees.png')}
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
