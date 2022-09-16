import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {MILLISECOND} from './helper';
import {redisConfig} from './redis.helper';
import {Config} from "./config.helper";

export const getTypeormConfig = (type: string, sid: string) => {
    type = type.toLowerCase();

    let config: TypeOrmModuleOptions = {
        type: 'mysql',
        charset: 'utf8mb4',
        timezone: 'Z',
        keepConnectionAlive: true,
        synchronize: false,
        entities: [__dirname + '/../../entities/*{.ts,.js}'],
        migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
    };

    switch (type) {
        case 'postgres':
            config = {type: 'postgres'};
            break;
        case 'mssql':
            config = {type: 'mssql', options: {useUTC: true}};
            break;
        case 'oracle':
            config = {type: 'oracle', sid};
            break;
    }

    config = {
        ...config,
        cache: {
            type: 'redis',
            options: redisConfig(),
            duration: MILLISECOND * 10,
        },
    };

    return config;
};

export const getTypeOrmModuleOptions = (type: string, sid: string) => {
    const typeOrmConfig = getTypeormConfig(type, sid);
    type = type.toLowerCase();

    const config: TypeOrmModuleOptions = {
        ...typeOrmConfig,
        host: Config.get('CONN_HOST'),
        port: Config.getNumber('CONN_PORT'),
        username: Config.get('CONN_USERNAME'),
        password: Config.get('CONN_PASSWORD'),
        database: Config.get('CONN_DATABASE'),
        logging: Config.getBoolean('CONN_LOGGING'),
    };
    return config;
};

export const getTypeOrmModuleMigration = () => {
    return {
        host: Config.get('CONN_HOST'),
        port: Config.getNumber('CONN_PORT'),
        username: Config.get('CONN_USERNAME'),
        password: Config.get('CONN_PASSWORD'),
        database: Config.get('CONN_DATABASE'),
        logging: Config.getBoolean('CONN_LOGGING'),
    };
};