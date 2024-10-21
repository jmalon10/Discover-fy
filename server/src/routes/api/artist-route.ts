// getTopTracks method
// /2.0/?method=artist.gettoptracks&artist=cher&api_key=YOUR_API_KEY&format=json

import express from 'express';
import type { Request, Response } from 'express';


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
export { router as artistRoute };
