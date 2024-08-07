import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Model } from 'mongoose';
import { Book } from './entities/book.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private BookSchema: Model<Book>){}
  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdMessage = new this.BookSchema(CreateBookDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Book[]> {
    return this.BookSchema.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
