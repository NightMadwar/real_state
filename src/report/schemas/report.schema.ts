import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Report extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userID: Types.ObjectId;

  @Prop({ required: true })
  reportType: string; // User, Property, Transaction

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  resolvedAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
