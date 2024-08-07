import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop()
  propertyID: Types.ObjectId;

}

export const AdminSchema = SchemaFactory.createForClass(Admin);
