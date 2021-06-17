import {
  NearByFilter,
  NearByParkingDetailParams,
  PaymentDetailParams,
} from '../../utils/types';
import Config from '../config';
import {
  near_parking,
  parking_aminities,
  parking_detail,
  parking_option,
  payment_detail,
} from '../endpoints';

export const NearByParking = (data: NearByFilter) => {
  return Config(near_parking(), 'POST', data);
};

export const Amenities = () => {
  return Config(parking_aminities(), 'GET');
};

export const NearByParkingDetails = (data: NearByParkingDetailParams) => {
  return Config(parking_detail(data.id), 'GET', data);
};

export const ParkingOptions = (parking_id: string) => {
  return Config(parking_option(), 'POST', {parking_id: parking_id});
};

export const PaymentDetail = (data: PaymentDetailParams) => {
  return Config(payment_detail(), 'POST', data);
};
