import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Appointment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Property' })
  propertyID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userID: Types.ObjectId;

  @Prop({ required: true })
  appointmentDate: Date;

  @Prop({ default: 'Pending' })
  status: string; // Pending, Confirmed, Cancelled

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
