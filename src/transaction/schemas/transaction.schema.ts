import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  transactionID: string;

  @Prop({ type: Types.ObjectId, ref: 'Property' })
  propertyID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  buyerID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  sellerID: Types.ObjectId;

  @Prop({ required: true })
  transactionType: string; // Buy, Rent

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  paymentMethod: string; // Fixed, Installments

  @Prop({ default: Date.now })
  transactionDate: Date;

  @Prop({ default: 'Pending' })
  status: string; // Pending, Completed, Cancelled

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
