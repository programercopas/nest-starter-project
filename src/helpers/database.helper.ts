import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { DbConfig } from "../dto/database.dto";
import { join } from "path";
import { connections } from "../main";

export const getConnectionOptions = (type: string) => {
  type = type.toLowerCase();

  let config: ConnectionOptions = {
    type: 'mysql',
    charset: 'utf8mb4',
    timezone: 'Z',
  };

  switch (type) {
    case 'mariadb': config = { type: 'mariadb',charset: 'utf8mb4', timezone: 'Z' }; break;
    case 'postgres': config = { type: 'postgres' }; break;
    case 'mssql': config = { type: 'mssql', options: {useUTC: true}, requestTimeout: 300000 }; break;
  }

  config = {
    ...config,
  };

  return config;
};

export const connectDatabase = async (config: DbConfig): Promise<Connection> => {
  const newConnection = await createConnection({
    ...getConnectionOptions(config.type),
    name: config.name,
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    logging: config.logging,
    entities: [
      join(__dirname, '../models/**/*{.ts,.js}'),
      join(__dirname, '../**/*.entity{.ts,.js}'),
    ],
  });

  connections.set(newConnection.name, newConnection); // set to global variable
  return newConnection;
};