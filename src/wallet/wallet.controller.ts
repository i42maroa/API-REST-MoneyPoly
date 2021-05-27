import { Controller, Get, NotFoundException, Post, HttpStatus, Res, Body } from '@nestjs/common';

import {CreateTransactionWalletDto} from './dto/create-transactionWallet.dto'
import { WalletService} from "./wallet.service";

@Controller('wallet')
export class WalletController {

    constructor(private walletService: WalletService){}

    @Get()
    async getTransactions(@Res() res){
        const transactions = await this.walletService.getListTransactions();
        if(!transactions) throw new NotFoundException('There are issues to show transactions');
        return res.status(HttpStatus.OK).json({
            transactions
        });
    }

    @Post()
    async createTransaction(@Res() res, @Body() createTransactionWalletDto: CreateTransactionWalletDto){
        const transaction = await this.walletService.create(createTransactionWalletDto);
        return res.status(HttpStatus.OK).json({
            message: 'Transaction Successfully Created',
            transaction
        });
    }

}
