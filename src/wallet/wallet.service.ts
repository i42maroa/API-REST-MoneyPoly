
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Wallet, WalletSchema } from './schemas/wallet.schema';
import { WalletTransaction, WalletTransactionDocument} from './schemas/WalletTransaction.schema';

import {CreateTransactionWalletDto} from './dto/create-transactionWallet.dto'

@Injectable()
export class WalletService {
    constructor(@InjectModel(WalletTransaction.name) private transactionModel: Model<WalletTransactionDocument>) {}

    async getListTransactions(): Promise<WalletTransactionDocument[]>{
        return await this.transactionModel.find();
    }

    async create(createTransactionWalletDto:CreateTransactionWalletDto): Promise<WalletTransactionDocument>{
        return await this.transactionModel.create(createTransactionWalletDto);
    }

}
