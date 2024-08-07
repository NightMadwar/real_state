import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyMediaService } from './property-media.service';
import { PropertyMediaController } from './property-media.controller';
import { PropertyMedia, PropertyMediaSchema } from './schemas/property-media.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PropertyMedia.name, schema: PropertyMediaSchema }])
  ],
  controllers: [PropertyMediaController],
  providers: [PropertyMediaService],
  exports: [PropertyMediaService],
})
export class PropertyMediaModule {}
