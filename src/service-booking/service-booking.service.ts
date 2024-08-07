import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ServiceBooking | null> {
    const serviceBooking = await this.serviceBookingModel.findById(id).exec();
    if (!serviceBooking) {
      throw new NotFoundException(`ServiceBooking with ID ${id} not found`);
    }
    return serviceBooking;
  }

  async update(id: string, updateServiceBookingDto: UpdateServiceBookingDto): Promise<ServiceBooking | null> {
    const updatedServiceBooking = await this.serviceBookingModel.findByIdAndUpdate(
      id,
      updateServiceBookingDto,
      { new: true }
    ).exec();
    if (!updatedServiceBooking) {
      throw new NotFoundException(`ServiceBooking with ID ${id} not found`);
    }
    return updatedServiceBooking;
  }

  async remove(id: string): Promise<ServiceBooking | null> {
    const deletedServiceBooking = await this.serviceBookingModel.findByIdAndDelete(id).exec();
    if (!deletedServiceBooking) {
      throw new NotFoundException(`ServiceBooking with ID ${id} not found`);
    }
    return deletedServiceBooking;
  }
}
