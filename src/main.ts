import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { Config } from './helpers/config.helper';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));
  await app.listen(Config.getNumber('APP_PORT'));
}

bootstrap();
