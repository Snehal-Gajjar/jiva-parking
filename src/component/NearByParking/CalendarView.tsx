import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

type Props = {
  type: 'date' | 'time';
  handleDateTime: (type: 'date' | 'time', date: Date) => void;
};

export const CalendarView = ({type, handleDateTime}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    handleDateTime(type, currentDate);
    setDate(currentDate);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: '#fff',
        height: 40,
        width: '20%',
        borderWidth: 0.5,
        borderColor: '#065591',
        borderRadius: 10,
        margin: 5,
        padding: 5,
      }}
      onPress={(e) => {
        e.preventDefault();
        setShow(!show);
      }}>
      <Text
        style={{
          fontFamily: 'Segoe UI',
          fontSize: 16,
        }}>
        {type === 'date'
          ? moment(date).format('DD/MM/YYYY')
          : moment(date).format('hh:mm a')}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          minimumDate={new Date()}
          mode={type}
          display="default"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};
