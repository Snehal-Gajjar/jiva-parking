import { TransactionParams, TransactionUpdateParams } from '../../utils/types';
import Config from '../config'
import { transaction_add, transaction_update, wallet_history, wallet_statement } from '../endpoints';

export const AddTransaction = (data: TransactionParams) => {
    return Config(transaction_add(), 'POST', data);
};

export const UpdateTransaction = (data: TransactionUpdateParams) => {
    return Config(transaction_update(), 'POST', data);
};


export const wallethistory = () => {
    return Config(wallet_history(), 'POST')
}

export const walletStatement = (type: string) => {
    return Config(wallet_statement(), 'POST', type)
}