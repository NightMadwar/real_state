import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  name: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
