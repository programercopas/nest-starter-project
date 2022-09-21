import { Injectable } from '@nestjs/common';
import { ExampleRepository } from '../database/repositories/example.repository';

@Injectable()
export class ExampleService {
  constructor(private exampleRepository: ExampleRepository) {}
}
