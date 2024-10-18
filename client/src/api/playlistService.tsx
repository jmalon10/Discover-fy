// import axios from 'axios';
// import type { PlaylistData } from '../interfaces/Playlist'; // Import PlaylistData to use it directly

// // Function to get all playlists
// export const getPlaylists = async (): Promise<PlaylistData[]> => { // Use PlaylistData[] here
//     try {
//         const response = await axios.get('/api/playlists'); // Your API endpoint
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching playlists:', error);
//         return [];
//     }
// };

// // Function to create a new playlist
// export const createPlaylist = async (playlistData: PlaylistData): Promise<PlaylistData | null> => { // Use PlaylistData here
//     try {
//         const response = await axios.post('/api/playlists', playlistData);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating playlist:', error);
//         return null;
//     }
// };

// // Function to delete a playlist by ID
// export const deletePlaylist = async (id: number): Promise<void> => {
//     try {
//         await axios.delete(`/api/playlists/${id}`);
//         console.log(`Playlist with ID ${id} deleted successfully`);
//     } catch (error) {
//         console.error('Error deleting playlist:', error);
//     }
// };