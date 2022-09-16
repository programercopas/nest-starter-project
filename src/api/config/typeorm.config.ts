import {DataSource} from "typeorm";
import {getTypeOrmModuleMigration} from "../../helpers/database.helper";

const typeOrmConfig = getTypeOrmModuleMigration();
export default new DataSource({
   type: 'mysql',
    ...typeOrmConfig,
});