import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<Transaction>) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async findOne(id: string): Promise<Transaction | null> {
    return this.transactionModel.findById(id).exec();
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction | null> {
    return this.transactionModel.findByIdAndUpdate(id, updateTransactionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Transaction | null> {
    return this.transactionModel.findByIdAndDelete(id).exec();
  }
}
