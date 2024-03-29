import { DataSource } from 'typeorm';
import ExampleEntity from '../database/entities/example.entity';
import { CreateExample1663313474320 } from '../database/migrations/1663313474320-CreateExample';
import { Config } from '../../helpers/config.helper';
import { InsertExample1663941981450 } from '../database/migrations/1663941981450-InsertExample';

export default new DataSource({
  type:
    Config.get('CONN_TYPE') === 'postgres'
      ? 'postgres'
      : Config.get('CONN_TYPE') === 'mysql'
      ? 'mysql'
      : 'mssql',
  host: Config.get('CONN_HOST'),
  port: Config.getNumber('CONN_PORT'),
  username: Config.get('CONN_USERNAME'),
  password: Config.get('CONN_PASSWORD'),
  database: Config.get('CONN_DATABASE'),
  logging: Config.getBoolean('CONN_LOGGING'),
  entities: [ExampleEntity],
  migrations: [CreateExample1663313474320, InsertExample1663941981450],
});
