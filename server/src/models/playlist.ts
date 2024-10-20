import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection'; // Ensure this is your Sequelize instance

class Playlist extends Model {}

Playlist.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Title is required
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'https://via.placeholder.com/150', // Default image if none is provided
    },
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'Playlist', // Define the model name
  }
);

export default Playlist;