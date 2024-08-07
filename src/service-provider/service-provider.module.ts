import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderController } from './service-provider.controller';
import { ServiceProvider, ServiceProviderSchema } from './schemas/service-provider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ServiceProvider.name, schema: ServiceProviderSchema }])
  ],
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
