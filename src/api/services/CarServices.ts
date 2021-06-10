import { Car } from '../../utils/types';
import Config from '../config'
import { vehicles, vehicle_add, vehicle_brands, vehicle_categories, vehicle_delete, vehicle_models } from '../endpoints';

export const getCars = () => {
    return Config(vehicles(), 'GET');
};

export const addCar = (data: Car) => {
    return Config(vehicle_add(), 'POST', data);
};

export const getMaker = () => {
    return Config(vehicle_brands(), 'GET')
}

export const getType = () => {
    return Config(vehicle_categories(), 'GET')
}

export const getModel = (brandId: string) => {
    return Config(vehicle_models(brandId), 'GET')
}

export const deleteCar = (carID: string) => {
    return Config(vehicle_delete(carID), 'GET')
}