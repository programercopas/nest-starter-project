import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {MILLISECOND} from './helper';
import { redisConfig } from './redis.helper';

export const getTypeOrmModuleOptions = (type: string, sid: string) => {
  type = type.toLowerCase();

  let config: TypeOrmModuleOptions = {
    type: 'mysql',
    charset: 'utf8mb4',
    timezone: 'Z',
  };

  switch (type) {
    case 'postgres': config = { type: 'postgres' }; break;
    case 'mssql': config = { type: 'mssql', options: {useUTC: true} }; break;
    case 'oracle': config = { type: 'oracle', sid }; break;
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

