import { Config } from './config.helper';

export const redisConfig = () => {
    let config = {};

    if (Config.get('REDIS_PASSWORD')) {
        config = {
            host: Config.get('REDIS_HOST') || '127.0.0.1',
            port: Config.getNumber('REDIS_PORT') || 6379,
            password: Config.get('REDIS_PASSWORD'),
        };
    } else {
        config = {
            host: Config.get('REDIS_HOST') || '127.0.0.1',
            port: Config.getNumber('REDIS_PORT') || 6379,
        };
    }
    return config;
};

