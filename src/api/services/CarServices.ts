import { Car, CarList } from '../../utils/types';
import Config from '../config'
import { vehicles, vehicle_add, vehicle_brands, vehicle_categories, vehicle_delete, vehicle_models, vehicle_update } from '../endpoints';

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

export const updateCar = (data: Car, id: string) => {
    return Config(vehicle_update(), 'POST', {
        ...data,
        id: id
    })
}