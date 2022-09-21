import { Injectable } from '@nestjs/common';
import { ExampleRepository } from '../../repositories/example.repository';

@Injectable()
export class ExampleService {
  constructor(private exampleRepository: ExampleRepository) {}
}
