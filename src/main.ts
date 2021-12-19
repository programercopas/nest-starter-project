import { NestFactory } from "@nestjs/core";
import { ApiModule } from "./api/api.module";
import { Config } from "./helpers/config.helper";
import { Connection } from "typeorm";
import { initDatabaseConnection } from "./config/database.config";

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await initDatabaseConnection();
  await app.listen(Config.getNumber("APP_PORT"));
}

bootstrap();

// for database connections
export const connections: Map<string, Connection> = new Map();
