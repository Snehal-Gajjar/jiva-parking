import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {AuthService} from '../../api/services';
import {toastShow} from '../../utils/Toast';
import {WalletHistoryData} from '../../utils/types';
import {BookingItem} from './BookingItem';

export const WalletHistory = () => {
  const [history, setHistory] = useState<WalletHistoryData[]>([]);
  useEffect(() => {
    getBookingHistory();
  }, []);

  const getBookingHistory = () => {
    AuthService.wallethistory()
      .then((result) => setHistory(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <ScrollView>
      {history.map((car) => (
        <BookingItem walletData={car} type="Wallet" />
      ))}
    </ScrollView>
  );
};
