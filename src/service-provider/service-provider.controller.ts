import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { ServiceProvider } from './schemas/service-provider.schema';

@Controller('service-providers')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Post()
  async create(@Body() createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    return this.serviceProviderService.create(createServiceProviderDto);
  }

  @Get()
  async findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ServiceProvider> {
    const serviceProvider = await this.serviceProviderService.findById(id);
    if (!serviceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return serviceProvider;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider> {
    const updatedServiceProvider = await this.serviceProviderService.update(id, updateServiceProviderDto);
    if (!updatedServiceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return updatedServiceProvider;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ServiceProvider> {
    const deletedServiceProvider = await this.serviceProviderService.delete(id);
    if (!deletedServiceProvider) {
      throw new NotFoundException(`ServiceProvider with ID ${id} not found`);
    }
    return deletedServiceProvider;
  }
}
