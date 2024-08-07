import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './schemas/appointment.schema';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Appointment> {
    const appointment = await this.appointmentService.findById(id);
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return appointment;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    const updatedAppointment = await this.appointmentService.update(id, updateAppointmentDto);
    if (!updatedAppointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return updatedAppointment;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Appointment> {
    const deletedAppointment = await this.appointmentService.delete(id);
    if (!deletedAppointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return deletedAppointment;
  }
}
