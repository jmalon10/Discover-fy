// import axios from 'axios';
// import type { PlaylistData } from '../interfaces/Playlist';

// // Define the base API URL for playlists
// const API_URL = '/api/playlists';

// // Function to get all playlists
// export const getPlaylists = async (): Promise<PlaylistData[]> => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching playlists:', error);
//         return [];
//     }
// };

// // Function to create a new playlist
// export const createPlaylist = async (playlistData: PlaylistData): Promise<PlaylistData | null> => {
//     try {
//         const response = await axios.post(API_URL, playlistData);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating playlist:', error);
//         return null;
//     }
// };

// // Function to update an existing playlist
// export const updatePlaylist = async (id: number, playlistData: Partial<PlaylistData>): Promise<PlaylistData | null> => {
//     try {
//         const response = await axios.put(`${API_URL}/${id}`, playlistData);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating playlist:', error);
//         return null;
//     }
// };

// // Function to delete a playlist by ID
// export const deletePlaylist = async (id: number): Promise<void> => {
//     try {
//         await axios.delete(`${API_URL}/${id}`);
//         console.log(`Playlist with ID ${id} deleted successfully`);
//     } catch (error) {
//         console.error('Error deleting playlist:', error);
//     }
// };