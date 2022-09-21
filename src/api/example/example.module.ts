import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExampleEntity from '../../entities/example.entity';
import { ExampleRepository } from '../../repositories/example.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository],
})
export class ExampleModule {}
