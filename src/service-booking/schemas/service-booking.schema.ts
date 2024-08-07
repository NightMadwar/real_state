import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class ServiceBooking extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  serviceProviderID: Types.ObjectId;

  @Prop({ required: true })
  serviceType: string; // Moving, Cleaning, Inspection

  @Prop({ default: Date.now })
  serviceDate: Date;

  @Prop({ default: 'Pending' })
  status: string; // Pending, Confirmed, Cancelled

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ServiceBookingSchema = SchemaFactory.createForClass(ServiceBooking);
