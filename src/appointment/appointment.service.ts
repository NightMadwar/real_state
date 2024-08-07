import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Appointment} from './schemas/appointment.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel(Appointment.name) private appointmentModel: Model<Appointment>) {}

  // Create a new appointment
  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    try {
      const newAppointment = new this.appointmentModel(createAppointmentDto);
      return await newAppointment.save();
    } catch (error) {
      throw new ConflictException('Error creating appointment: ' + error.message);
    }
  }

  // Find an appointment by ID
  async findById(id: string): Promise<Appointment | null> {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return appointment;
  }

  // Find all appointments
  async findAll(): Promise<Appointment[]> {
    return this.appointmentModel.find().exec();
  }

  // Update an appointment by ID
  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment | null> {
    const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(
      id,
      updateAppointmentDto,
      { new: true }
    ).exec();
    if (!updatedAppointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return updatedAppointment;
  }

  // Delete an appointment by ID
  async delete(id: string): Promise<Appointment | null> {
    const deletedAppointment = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!deletedAppointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return deletedAppointment;
  }
}
