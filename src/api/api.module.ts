import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ExampleModule } from './example/example.module';
@Module({
  imports: [ConfigModule, DatabaseModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
