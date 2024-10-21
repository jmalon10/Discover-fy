// import { Request, Response } from 'express';
// import Playlist from '../models/playlist'; // Corrected to the right path for the model

// // Get all playlists
// export const getPlaylists = async (_req: Request, res: Response) => {
//   try {
//     const playlists = await Playlist.findAll();
//     res.status(200).json(playlists);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch playlists' });
//   }
// };

// // Create a new playlist
// export const createPlaylist = async (req: Request, res: Response) => {
//   try {
//     const { title, image_url } = req.body;
//     const newPlaylist = await Playlist.create({ title, image_url });
//     res.status(201).json(newPlaylist);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create playlist' });
//   }
// };

// // Update a playlist
// export const updatePlaylist = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { title, image_url } = req.body;
//     const updatedPlaylist = await Playlist.update(
//       { title, image_url },
//       { where: { id } }
//     );
//     res.status(200).json(updatedPlaylist);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update playlist' });
//   }
// };

// // Delete a playlist
// export const deletePlaylist = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await Playlist.destroy({ where: { id } });
//     res.status(200).json({ message: 'Playlist deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete playlist' });
//   }
// };