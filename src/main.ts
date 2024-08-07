import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Real Estate Application API')
    .setDescription('The real estate application API description')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('property')
    .addTag('agent')
    .addTag('listing')
    .addTag('transaction')
    .addTag('message')
    .addTag('service-booking')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
