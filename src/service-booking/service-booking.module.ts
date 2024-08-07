import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceBookingService } from './service-booking.service';
import { ServiceBookingController } from './service-booking.controller';
import { ServiceBooking, ServiceBookingSchema } from './schemas/service-booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ServiceBooking.name, schema: ServiceBookingSchema }])
  ],
  controllers: [ServiceBookingController],
  providers: [ServiceBookingService],
  exports: [ServiceBookingService],
})
export class ServiceBookingModule {}
 