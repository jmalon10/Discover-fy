import { Router } from 'express';
import Playlist from '../../models/playlist.js';
import type { Request, Response } from 'express';
// import { createPlaylist, getPlaylists, updatePlaylist, deletePlaylist } from '../api/playlistService'; // Assuming you have these controller functions

const router = Router();

// GET /api/playlists - Fetch all playlists
// router.get('/', getPlaylists);
router.get('/', async (_req: Request, res: Response) => {
  try {
    const playlists = await Playlist.findAll(); // Retrieve all playlists
    res.status(200).json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Failed to fetch playlists' });
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

// // PUT /api/playlists/:id - Update an existing playlist
// router.put('/:id', updatePlaylist);
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tracks, FavoriteArtist } = req.body;

  try {
    const playlist = await Playlist.findByPk(id);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    const updatedPlaylist = await playlist.update({ tracks, FavoriteArtist });
    return res.status(200).json(updatedPlaylist);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});
// // DELETE /api/playlists/:id - Delete a playlist
// router.delete('/:id', deletePlaylist);
export const deletePlaylist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Playlist.destroy({ where: { id } });
    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete playlist' });
  }
};

export { router as playlistRouter };
