import { createConnection } from 'typeorm';

import path from 'path';

import User from './entities/User'

path.resolve(__dirname, 'entities')
export const connection = async () => { 
  return createConnection({
    type: 'sqlite',
    database: path.resolve(__dirname, 'db.sqlite'),
    synchronize: true,
    entities: [User],
    logging: true
  })
  .then((data) => {
    console.log('Database is now connected! ', data.name);
  })
  .catch((err) => {
    console.log('Database is not connected! ', err);
  }) 
}