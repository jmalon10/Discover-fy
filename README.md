# Discover-fy

## Table of Contents
- [Description](#description)
- [Features](#features)
- [License](#license)
- [Technologies Used](#technologies-used)
- [Installation and Usage](#installation-and-usage)
- [Acknowledgements](#acknowledgements)
- [Deployed Application](#deployed-application)
- [App Preview](#app-preview)
- [Contact](#contact)

## Description
Streamline your music experience with Discover-fy to seamlessly create, manage and organize playlists, explore new music, and receive curated song recommendations. Our app intelligently adapts to your preferences, ensuring that every playlist and discovery feels uniquely yours


## Features
- **User Authentication**: Secure sign-up and log-in with JWT-based authentication to protect your data.
- **Playlist Management**: Easily create, update, and delete playlists with a user-friendly interface.
- **Personalized Song Recommendations**: Receive song recommendations based on your listening history and preferences.
- **Search Functionality**: Find artists, albums, and tracks with a powerful, integrated search system.
- **Mobile Responsive Design**: Optimized for mobile, tablet, and desktop experiences.

## License
MIT License

## Technologies Used
- React
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Tailwind CSS
- Vite
- Last.Fm API [https://www.last.fm/api]
- Deezer [https://developers.deezer.com/api]

## Installation and Usage

### Prerequisites
- Node.js
- PostgreSQL

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/jmalon10/Discover-fy.git

2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install

3. Set up environment variables:
   Create a .env file in the server folder with the following:
    DB_NAME='users_db'
    DB_USER='postgres'
    DB_PASSWORD=''
    JWT_SECRET_KEY='mysecretshhh' 

4. Start the development server:
    cd server
    npm run dev
    cd ../client
    npm run dev 
    
## Acknowledgements
- Render for hosting

## Deployed Application
Discover-fy [https://discover-fy.onrender.com/]
***** If the render deployment is not working, one of our team members will update the Last.fm [API](https://www.last.fm/api/account/create) key in the environment and the database connection following these steps: [Deploying Your Full-Stack Application on Render - Jackie Maloney](https://medium.com/@jmaloney11277/deploying-your-full-stack-application-on-render-1d7b9631d84f)
## App Preview


Check out some of the features in action below:

- **Playlist Management**: Easily create, edit, and delete playlists.
- **Song Recommendations**: Get song recommendations based on your preferences.
- **Mobile Responsive Design**: Our app is optimized for all screen sizes.

![Discover-fy Preview](link-to-your-app-preview-image-or-gif)

![Discover-fy App Screenshot](https://github.com/jmalon10/Discover-fy/blob/tailwind/jilani/Discover-fy.png?raw=true)


## Contact
For questions or feedback, please reach out to our Developer Team
- [Lekshmi's GitHub] (http://github.com/lekshmisree89)
- [Ryan's GitHub] (http://github.com/Robo-Ryan)
- [Kol's GitHub] (http://github.com/kol3wang)
- [Judymae's GitHub] (http://github.com/judymaej)
- [Jackie's GitHub] (http://github.com/jmalon10)
- [Jilani's GitHub] (http://github.com/jiju-codes)

