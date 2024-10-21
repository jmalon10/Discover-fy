// getTopTracks method
// /2.0/?method=artist.gettoptracks&artist=cher&api_key=YOUR_API_KEY&format=json

import express from 'express';
import type { Request, Response } from 'express';
import { ArtistImage, DeezerApiResponse } from '../../types/express/deezer.interface';

const router = express.Router();

// GET /api/artists/tracksByArtist 
router.get('/tracksByArtist', async (req: Request, res: Response) => {
  try {
    const { artist } = req.query;

    const response = await fetch(
      // get tracks from lastfm by artist
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=a06b22dcf000d6d58066809b74bfb2b2&format=json`);

    // send the tracks as json
    const tracks = await response.json();
    return res.json(tracks);


    // res.json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to fetch artist images from Deezer
router.get('/artist-images', async (req, res) => {

  try {
      const {artist} = req.query; // Get the query parameter (e.g., artist name)

      // Make the request to the Deezer API
      const response = await fetch(`https://api.deezer.com/search/artist?q=${artist}`);
      const data = await response.json() as DeezerApiResponse; // this data type is DeezerApiResponse
  
      // Extract the necessary image information
      const artistImage : ArtistImage = data.data[0];
    
        return res.json(artistImage); // Send the artist images as the response
        console.log (artistImage);
      } catch (error: any) {
        return res.status(500).json({ error: 'Failed to fetch artist images' });
      }
    });
   

export { router as artistRoute };

