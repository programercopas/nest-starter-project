import {DataSource} from "typeorm";
import {getTypeOrmModuleMigration} from "../../helpers/database.helper";
import Example from "../../entities/example";
import {CreateExample1663313474320} from "../../migrations/1663313474320-CreateExample";

const typeOrmConfig = getTypeOrmModuleMigration();
export default new DataSource({
   type: 'postgres',
    ...typeOrmConfig,
    entities:[Example],
    migrations: [CreateExample1663313474320],
});