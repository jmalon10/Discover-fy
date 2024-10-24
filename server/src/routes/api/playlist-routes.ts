import { Router } from 'express';
import Playlist from '../../models/playlist.js';
import type { Request, Response } from 'express';

const router = Router();

// GET /api/playlists - Fetch all playlists

router.get('/getAllPlaylists', async (_req: Request, res: Response) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/playlists - Create a new playlist
router.post('/createPlaylist', async (req: Request, res: Response) => {
 const { tracks, FavoriteArtist } = req.body;
 console.log('log: tracks', tracks);
  // save the playlist to the database
  try {
      const newPlaylist = await Playlist.create({ tracks: tracks, FavoriteArtist });
      console.log('log: newPlaylist', newPlaylist);
      res.status(201).json(newPlaylist);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
});
export { router as playlistRouter };
