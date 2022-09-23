import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExampleEntity from '../database/entities/example.entity';
import { ExampleDbService } from '../../services/db/example.db.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleDbService],
  exports: [TypeOrmModule],
})
export class ExampleModule {}
