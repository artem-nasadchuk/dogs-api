import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db.js';

export interface DogInterface {
  name: string;
  color: string;
  tail_length: number;
  weight: number;
}

export type DogModel = Model & DogInterface;

export const Dog = sequelize.define<DogModel>('dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  tail_length: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
