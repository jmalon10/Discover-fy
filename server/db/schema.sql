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

