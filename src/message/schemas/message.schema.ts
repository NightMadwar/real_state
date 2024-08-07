import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  senderID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  receiverID: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  sentAt: Date;

  @Prop()
  readAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
