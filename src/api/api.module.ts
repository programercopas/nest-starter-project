import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ExampleModule } from './example/example.module';
import { GlobalModule } from './global/global.module';
@Module({
  imports: [ConfigModule, DatabaseModule, ExampleModule, GlobalModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
