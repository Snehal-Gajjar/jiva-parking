import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {AuthService} from '../../api/services';
import {toastShow} from '../../utils/Toast';
import {BookingHistoryData} from '../../utils/types';
import {BookingItem} from './BookingItem';

export const BookingHistory = () => {
  const [history, setHistory] = useState<BookingHistoryData[]>([]);
  useEffect(() => {
    getBookingHistory();
  }, []);

  const getBookingHistory = () => {
    AuthService.bookinghistory()
      .then((result) => setHistory(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <ScrollView>
      {history.map((car) => (
        <BookingItem data={car} />
      ))}
    </ScrollView>
  );
};
