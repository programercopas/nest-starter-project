import { Logger } from "@nestjs/common";
import { Config } from "../helpers/config.helper";
import { connectDatabase } from "../helpers/database.helper";

export async function initDatabaseConnection() {
  try {
    if (Config.get('CONN_NAME')) {
      await connectDatabase({
        name: Config.get(`CONN_NAME`),
        type: Config.get(`CONN_TYPE`),
        host: Config.get(`CONN_HOST`),
        port: Config.getNumber(`CONN_PORT`),
        username: Config.get(`CONN_USERNAME`),
        password: Config.get(`CONN_PASSWORD`),
        database: Config.get(`CONN_DATABASE`),
        logging: Config.getBoolean(`CONN_LOGGING`),
      });
    }
  } catch (e) {
    Logger.error(e.message, e.stack, "initDatabaseConnection");
  }
}