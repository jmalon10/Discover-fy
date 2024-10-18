// const Playlists = () => {
//     return (
//       <section>
//         <h1>This is the page you will see your newly generated playlist!</h1>
//         </section>
//     );
//   };
  
//   export default Playlists;
// import { useState, useEffect } from 'react';
// import PlaylistCard from '../components/Playlist';
// import { getPlaylists, deletePlaylist } from '../api/playlistService' // API or local storage service
// import type { PlaylistData } from '../interfaces/Playlist';

// const Playlists = () => {
//   const [playlists, setPlaylists] = useState<PlaylistData[]>([]);

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       const data = await getPlaylists(); // Fetch playlists
//       setPlaylists(data);
//     };

//     fetchPlaylists();
//   }, []);

//   const handleDelete = async (id: number) => {
//     await deletePlaylist(id); // Delete playlist from API or local storage
//     setPlaylists(playlists.filter((playlist) => playlist.id !== id)); // Update state
//   };

//   return (
//     <div className="playlists-page">
//       <h1>Your Playlists</h1>
//       <PlaylistCard playlists={playlists} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default Playlists;