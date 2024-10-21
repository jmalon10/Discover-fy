import { Router } from 'express';
import Playlist from '../../models/playlist.js';
import type { Request, Response } from 'express';
// import { createPlaylist, getPlaylists, updatePlaylist, deletePlaylist } from '../api/playlistService'; // Assuming you have these controller functions

const router = Router();

// GET /api/playlists - Fetch all playlists
// router.get('/', getPlaylists);

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

// // PUT /api/playlists/:id - Update an existing playlist
// router.put('/:id', updatePlaylist);

// // DELETE /api/playlists/:id - Delete a playlist
// router.delete('/:id', deletePlaylist);

export { router as playlistRouter };
