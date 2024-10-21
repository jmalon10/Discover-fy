import { useState } from "react";
import { RecommendedArtist } from "../interfaces/RecommendedArtist";
//import RecommendedArtistCard from "../components/RecommendedArtistCard";
import Auth from '../utils/auth';
import TopTracksCard from "../components/TopTracksCard";

const Discover = () => {
  const [favoriteArtist, setFavoriteArtist] = useState<string>(''); // State to capture user's input
  const [error, setError] = useState<string | null>(null);
  const [artists, setArtists] = useState<RecommendedArtist[]>([]);

  // Updated fetchArtists function to accept artist name
  const fetchArtists = async (artistName: string) => {
    try {
      const response = await fetch(`/api/artists/tracksByArtist?artist=${encodeURIComponent(artistName)}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
      console.log('log: data', data);
      if (response.ok) {
        setArtists(data.toptracks.track);
      } else {
        setError("Artist not found");
      }
    } catch (err) {
      setError("Failed to fetch artist data");
      console.log('Error from data retrieval:', err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted");

    // Check if the favoriteArtist input is not empty
    if (favoriteArtist) {
      // Call fetchArtists with the favoriteArtist input
      await fetchArtists(favoriteArtist);
    }
  };

  console.log('log: artists', artists);
  const tracks = artists.map((artist) => artist.name);
  console.log('log: tracks', tracks);

  return (
    <section>
      <h1>This is the discover page!</h1>

      {/* Form to enter favorite artist */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="favoriteArtist">Enter your favorite artist:</label>
        <input
          type="text"
          id="favoriteArtist"
          value={favoriteArtist}
          onChange={(e) => setFavoriteArtist(e.target.value)} // Update state when user types
        />
        <button type="submit">Submit</button>
      </form>
    
      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Map through the list of recommended artists */}
      {/* display the top tracks card only when the submit button is pushed */}
      {tracks.length > 0 && (
        <TopTracksCard FavoriteArtist={favoriteArtist} tracks={tracks} />
      )}
    </section>
  );
};

export default Discover;

