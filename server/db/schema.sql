-- DROP DATABASE
DROP DATABASE IF EXISTS users_db;

-- CREATE DATABASE
CREATE DATABASE users_db;

-- Switch to the new database
\c users_db

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the playlists table
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE, -- Link each playlist to a user
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255), -- Store the image URL for the playlist
    tracks JSONB NOT NULL, -- Store the list of tracks as a JSON array
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);