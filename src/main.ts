import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { Config } from './helpers/config.helper';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));
  const config = new DocumentBuilder()
    .setTitle('NESTJS STARTER')
    .setDescription('starter project for nestjs backend api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(Config.getNumber('APP_PORT'));
}

bootstrap();
