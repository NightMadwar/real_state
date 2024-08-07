import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceBooking } from './schemas/service-booking.schema';
import { CreateServiceBookingDto } from './dto/create-service-booking.dto';
import { UpdateServiceBookingDto } from './dto/update-service-booking.dto';

@Injectable()
export class ServiceBookingService {
  constructor(@InjectModel(ServiceBooking.name) private serviceBookingModel: Model<ServiceBooking>) {}

  async create(createServiceBookingDto: CreateServiceBookingDto): Promise<ServiceBooking> {
    const createdServiceBooking = new this.serviceBookingModel(createServiceBookingDto);
    return createdServiceBooking.save();
  }

  async findAll(): Promise<ServiceBooking[]> {
    return this.serviceBookingModel.find().exec();
  }

  async findOne(id: string): Promise<ServiceBooking> {
    return this.serviceBookingModel.findById(id).exec();
  }

  async update(id: string, updateServiceBookingDto: UpdateServiceBookingDto): Promise<ServiceBooking> {
    return this.serviceBookingModel.findByIdAndUpdate(id, updateServiceBookingDto, { new: true }).exec();
  }

  async remove(id: string): Promise<ServiceBooking> {
    return this.serviceBookingModel.findByIdAndDelete(id).exec();
  }
}
