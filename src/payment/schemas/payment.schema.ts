import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Transaction' })
  transactionID: Types.ObjectId;

  @Prop({ required: true })
  paymentAmount: number;

  @Prop({ required: true })
  paymentDate: Date;

  @Prop({ required: true })
  paymentMethod: string; // Credit Card, Bank Transfer, PayPal

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
