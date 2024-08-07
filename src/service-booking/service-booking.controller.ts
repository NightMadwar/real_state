import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceBookingService } from './service-booking.service';
import { CreateServiceBookingDto } from './dto/create-service-booking.dto';
import { UpdateServiceBookingDto } from './dto/update-service-booking.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('service-booking')
@Controller('service-booking')
export class ServiceBookingController {
  constructor(private readonly serviceBookingService: ServiceBookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create service booking' })
  @ApiBody({ type: CreateServiceBookingDto })
  async create(@Body() createServiceBookingDto: CreateServiceBookingDto) {
    return this.serviceBookingService.create(createServiceBookingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all service bookings' })
  async findAll() {
    return this.serviceBookingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get service booking by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Service Booking ID' })
  async findOne(@Param('id') id: string) {
    return this.serviceBookingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update service booking' })
  @ApiParam({ name: 'id', required: true, description: 'Service Booking ID' })
  @ApiBody({ type: UpdateServiceBookingDto })
  async update(@Param('id') id: string, @Body() updateServiceBookingDto: UpdateServiceBookingDto) {
    return this.serviceBookingService.update(id, updateServiceBookingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete service booking' })
  @ApiParam({ name: 'id', required: true, description: 'Service Booking ID' })
  async remove(@Param('id') id: string) {
    return this.serviceBookingService.remove(id);
  }
}
