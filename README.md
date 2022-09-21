<p align="center" style="font-size: 31px; font-weight:bold;">NEST STARTER API PROJECT</p>
  
## Description

a starter API project using [NestJs](https://github.com/nestjs/nest) framework.

## Installation

```bash
# clone this repository
$ git clone https://github.com/programercopas/nest-starter-project.git

# run npm install
$ npm install
```

## Configuration
```bash
# copy .env.example
$ cp .env.example env

# input environment config in .env file
# Apps
APP_PORT=3000

# Database Connection
CONN_TYPE=mysql
CONN_HOST=localhost
CONN_PORT=3306
CONN_USERNAME=root
CONN_PASSWORD=secret
CONN_DATABASE=nest_starter
CONN_LOGGING=false

# Redis Config
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```

## Running the app

```bash
# run redis in local
$ redis-server

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app using docker
```bash
# copy docker-compose.yml.example
$ cp docker-compose.yml.example docker-compose.yml

# run docker-compose
$ docker-compose up -d  

# stop docker-compose
$ docker-compose down -v 
```

# Database Migration
```bash
# create migration file
$ npm run migration:create ./src/migrations/CreateTableExample

# run migrations file
$ npm run migration:migrate

# run migration revert
$ npm run migration:revert

# generate migration from entities
$ npm run migration:generate ./src/migrations/GenerateAllEntities
```

## License

[MIT licensed](LICENSE).
