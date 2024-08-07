import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Message> {
    return this.messageModel.findById(id).exec();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto): Promise<Message> {
    return this.messageModel.findByIdAndUpdate(id, updateMessageDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Message> {
    return this.messageModel.findByIdAndDelete(id).exec();
  }
}
