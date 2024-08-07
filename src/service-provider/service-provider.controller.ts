import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { CreateServiceProviderDto} from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { ServiceProvider } from './schemas/service-provider.schema';

@Controller('service-providers')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createServiceProviderDto: CreateServiceProviderDto): Promise<ServiceProvider> {
    return this.serviceProviderService.create(createServiceProviderDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ServiceProvider> {
    return this.serviceProviderService.findById(id);
  }

  @Get()
  async findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateServiceProviderDto: UpdateServiceProviderDto): Promise<ServiceProvider> {
    return this.serviceProviderService.update(id, updateServiceProviderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.serviceProviderService.delete(id);
  }
}
