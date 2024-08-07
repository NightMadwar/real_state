import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceProvider, ServiceProviderDocument } from './schemas/service-provider.schema';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Injectable()
export class ServiceProviderService {
  constructor(@InjectModel(ServiceProvider.name) private serviceProviderModel: Model<ServiceProviderDocument>) {}

  async create(createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    try {
      const newServiceProvider = new this.serviceProviderModel(createServiceProviderDto);
      return await newServiceProvider.save();
    } catch (error) {
      throw new ConflictException('Error creating service provider: ' + error.message);
    }
  }

  async findById(id: string): Promise<ServiceProvider | null> {
    const serviceProvider = await this.serviceProviderModel.findById(id).exec();
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return serviceProvider;
  }

  async findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderModel.find().exec();
  }

  async update(id: string, updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider | null> {
    const updatedServiceProvider = await this.serviceProviderModel.findByIdAndUpdate(
      id,
      updateServiceProviderDto,
      { new: true }
    ).exec();
    if (!updatedServiceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return updatedServiceProvider;
  }

  async delete(id: string): Promise<ServiceProvider | null> {
    const deletedServiceProvider = await this.serviceProviderModel.findByIdAndDelete(id).exec();
    if (!deletedServiceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return deletedServiceProvider;
  }
}
