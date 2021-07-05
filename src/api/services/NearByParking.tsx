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
  console.log(data)
  return Config(near_parking(), 'POST', data);
};

export const Amenities = () => {
  return Config(parking_aminities(), 'GET');
};

export const NearByParkingDetails = (data: NearByParkingDetailParams) => {
  console.log(data);
  return Config(parking_detail(data.id), 'POST', data);
};

export const ParkingOptions = (parking_id: string) => {
  console.log(parking_id);
  return Config(parking_option(), 'POST', {parking_id: parking_id});
};

export const PaymentDetail = (data: PaymentDetailParams) => {
  console.log(data);
  return Config(payment_detail(), 'POST', data);
};
