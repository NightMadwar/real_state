import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Property extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  area: number;

  @Prop()
  height: number;

  @Prop()
  numberOfRooms: number;

  @Prop()
  numberOfBathrooms: number;

  @Prop()
  materials: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userID: Types.ObjectId;

  @Prop()
  status: string; // Available, Sold, Rented

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
