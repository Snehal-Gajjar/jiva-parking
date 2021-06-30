import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {BookingService} from '../../api/services';
import {toastShow} from '../../utils/Toast';
import {BookingHistoryData} from '../../utils/types';
import {BookingItem} from './BookingItem';

export const BookingHistory = () => {
  const [history, setHistory] = useState<BookingHistoryData[]>([]);
  useEffect(() => {
    getBookingHistory();
  }, []);

  const getBookingHistory = () => {
    BookingService.bookinghistory()
      .then((result) => setHistory(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  return (
    <ScrollView>
      {history.map((car) => (
        <BookingItem bookingdata={car} type="Booking" />
      ))}
    </ScrollView>
  );
};
