import { BookingParams } from '../../utils/types';
import Config from '../config'
import { booking_add, booking_history, booking_update } from '../endpoints';

export const AddBooking = (data: BookingParams) => {
    return Config(booking_add(), 'POST', data);
};

export const UpdateBooking = (data: BookingParams) => {
    return Config(booking_update(), 'POST', data);
};

export const bookinghistory = () => {
    return Config(booking_history(), 'POST')
}
