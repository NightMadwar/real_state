import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './schemas/appointment.schema';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('appointments')
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  // Create a new appointment
  @Post()
  @ApiOperation({ summary: 'Send appointment' })
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateAppointmentDto })
  async create(@Body() createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.create(createAppointmentDto);
  }

  // Find an appointment by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get appointment by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Appointment ID' })
  async findById(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentService.findById(id);
  }

  // Find all appointments
  @Get()
  @ApiOperation({ summary: 'Get all appointments' })
  async findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  // Update an appointment by ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  // Delete an appointment by ID
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.appointmentService.delete(id);
  }
}
