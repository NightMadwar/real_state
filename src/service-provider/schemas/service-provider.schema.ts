import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceProviderDocument = ServiceProvider & Document;

@Schema()
export class ServiceProvider {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  contactInfo: string;

  @Prop()
  rating: number;

  @Prop({ required: true })
  serviceType: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ServiceProviderSchema = SchemaFactory.createForClass(ServiceProvider);
