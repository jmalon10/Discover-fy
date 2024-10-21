import sequelize from '../config/connection.js'
import { PlaylistFactory } from './playlist.js';
import { UserFactory } from './user.js';

const User = UserFactory(sequelize);
const Playlist = PlaylistFactory(sequelize);

export { User, Playlist };
