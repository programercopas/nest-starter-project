import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "../config/config.module";
import {ConfigService} from "../config/config.service";
import {getTypeOrmModuleOptions} from "../../helpers/database.helper";
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const typeOrmConfig = getTypeOrmModuleOptions(config.get('CONN_TYPE'),config.get('CONN_DATABASE'));
                return {
                    ...typeOrmConfig,
                    host: config.get('CONN_HOST'),
                    port: config.getInt('CONN_PORT'),
                    username: config.get('CONN_USERNAME'),
                    password: config.get('CONN_PASSWORD'),
                    database: config.get('CONN_DATABASE'),
                    keepConnectionAlive: true,
                    entities: [__dirname + '/../../entities/*{.ts,.js}'],
                    logging: config.getBoolean('CONN_LOGGING'),
                    charset: 'utf8mb4',
                    timezone: 'Z',
                }
            },
        }),
    ],
})

export class DatabaseModule {}