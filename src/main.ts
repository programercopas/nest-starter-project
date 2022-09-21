import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { Config } from './helpers/config.helper';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(Config.getNumber('APP_PORT'));
}

bootstrap();
