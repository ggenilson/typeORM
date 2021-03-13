import { createConnection } from 'typeorm';

export const connection = () => { 
  return createConnection({
    type: 'sqlite',
    database: './',
    synchronize: true,
  })
  .then((data) => {
    console.log('Database is now connected! ', data.name);
  })
  .catch((err) => {
    console.log('Database in not connected! ', err);
  }) 
}