import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export const CalendarView = () => {
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: '#fff',
        height: 40,
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#065591',
        borderRadius: 10,
        margin: 5,
        padding: 5
      }}
      onPress={() => setShow(!show)}>
      <Text
        style={{
          fontFamily: 'Segoe UI',
          fontSize: 16,
        }}>
        {moment(date).format('DD/MM/YYYY h:mm a')}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};
