import { All, MiddlewareConsumer, Module ,NestModule } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { TransactionModule } from './transaction/transaction.module';
import { MessageModule } from './message/message.module';
import { ServiceBookingModule } from './service-booking/service-booking.module';
import { ReportModule } from './report/report.module';
import { PropertyMediaModule } from './property-media/property-media.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';

import { NestFactory } from '@nestjs/core';
import { LoggingMiddleware } from './common/middleware/logging/logging.middleware';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', 
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/real_estate_db'),
    UserModule,
    PropertyModule,
    TransactionModule,
    MessageModule,
    ServiceBookingModule,
    ReportModule,
    PropertyMediaModule,
    AppointmentModule,
    PaymentModule,
    AuthModule,
    AdminModule,
  ],
})
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
  consumer.apply(LoggingMiddleware).forRoutes('*')
}
}
