import { TransactionParams } from '../../utils/types';
import Config from '../config'
import { transaction_add } from '../endpoints';

export const AddTransaction = (data: TransactionParams) => {
    return Config(transaction_add(), 'POST', data);
};