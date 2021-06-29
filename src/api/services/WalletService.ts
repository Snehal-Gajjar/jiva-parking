import { TransactionParams, TransactionUpdateParams } from '../../utils/types';
import Config from '../config'
import { transaction_add, transaction_update } from '../endpoints';

export const AddTransaction = (data: TransactionParams) => {
    return Config(transaction_add(), 'POST', data);
};

export const UpdateTransaction = (data: TransactionUpdateParams) => {
    return Config(transaction_update(), 'POST', data);
};