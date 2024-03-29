import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { getTypeOrmConfigDefault } from '../../helpers/database.helper';
import ExampleEntity from './entities/example.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const typeOrmConfig = getTypeOrmConfigDefault(
          config.get('CONN_TYPE'),
          config.get('CONN_DATABASE'),
        );
        return {
          ...typeOrmConfig,
          entities: [ExampleEntity],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
