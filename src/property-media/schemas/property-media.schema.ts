import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class PropertyMedia extends Document {
  @Prop({ required: true })
  mediaType: string; // Image, Video, VirtualTour

  @Prop({ required: true })
  url: string;

  @Prop({ type: Types.ObjectId, ref: 'Property' })
  propertyID: Types.ObjectId;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PropertyMediaSchema = SchemaFactory.createForClass(PropertyMedia);
