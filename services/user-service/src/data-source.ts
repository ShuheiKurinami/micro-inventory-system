import { DataSource } from 'typeorm';
import { Users } from './entity/User.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'inventory_db',
  synchronize: false,
  logging: true,
  entities: [Users],
  migrations: ['dist/migration/**/*.js'],
});
