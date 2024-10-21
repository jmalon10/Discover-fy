import express from 'express';
import fetch from 'node-fetch'; // Ensure you have node-fetch installed

const router = express.Router();

// Route to fetch artist images from Deezer
router.get('/artist-images', async (req, res) => {
    const artistQuery = req.query.q; // Get the query parameter (e.g., artist name)
  
    if (!artistQuery) {
      return res.status(400).json({ error: 'Artist query is required' });
    }
  
    try {
        // Make the request to the Deezer API
        const response = await fetch(`https://api.deezer.com/search/artist?q=${artistQuery}`);
        const data = await response.json();
    
        // Extract the necessary image information
        const artistImages = data.data.map((artist: any) => ({
            name: artist.name,
            image: artist.picture_big,  // You can change this to picture_small, picture_medium, etc.
          }));
      
