import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define an interface for the Playlist attributes
interface PlaylistAttributes {
  id: number;
  title: string;
  tracks: Array<{ name: string; artist: string }>; // Array of track objects
}

// Define an interface for the creation of a Playlist
interface PlaylistCreationAttributes extends Optional<PlaylistAttributes, 'id'> {}

// Define the Playlist model class
export class Playlist extends Model<PlaylistAttributes, PlaylistCreationAttributes> implements PlaylistAttributes {
  public id!: number;
  public title!: string;
  public tracks!: Array<{ name: string; artist: string }>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Function to initialize the Playlist model
export function PlaylistFactory(sequelize: Sequelize): typeof Playlist {
  Playlist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tracks: {
        type: DataTypes.JSON, // Store tracks as JSON
        allowNull: true, // Tracks can be null initially
        defaultValue: [], // Default to an empty array
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      timestamps: true, // Automatically manage createdAt and updatedAt timestamps
      underscored: true, // Use snake_case for column names
      freezeTableName: true, // Prevent Sequelize from pluralizing table names
      modelName: 'playlist', // Model name
    }
  );

  return Playlist; // Return the initialized Playlist model
}