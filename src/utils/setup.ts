import { sequelize } from './db.js';
import { Dog } from '../models/Dog.js';

async function initializeDatabase() {
  try {
    await sequelize.sync();
    const existingDogs = await Dog.findAll();

    if (existingDogs.length === 0) {
      await Dog.bulkCreate([
        { name: 'Neo', color: 'red & amber', tail_length: 22, weight: 32 },
        { name: 'Jessy', color: 'black & white', tail_length: 7, weight: 14 },
      ]);
      console.log('Database initialized successfully');
    } else {
      console.log('Database already initialized');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase();
