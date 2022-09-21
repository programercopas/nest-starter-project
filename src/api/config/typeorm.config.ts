import { DataSource } from 'typeorm';
import { getTypeOrmModuleMigration } from '../../helpers/database.helper';
import ExampleEntity from '../../entities/example.entity';
import { CreateExample1663313474320 } from '../../migrations/1663313474320-CreateExample';

const typeOrmConfig = getTypeOrmModuleMigration();
export default new DataSource({
  type: 'postgres',
  ...typeOrmConfig,
  entities: [ExampleEntity],
  migrations: [CreateExample1663313474320],
});
