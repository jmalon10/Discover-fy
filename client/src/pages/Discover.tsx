import { useEffect, useState } from "react";
import { RecommendedArtist } from "../interfaces/RecommendedArtist";
import RecommendedArtistCard from "../components/RecommendedArtistCard";
import { retrieveArtists } from "../api/artistsAPI";
import Auth from '../utils/auth';

const Discover = () => {
  const [favoriteArtist, setFavoriteArtist] = useState<string>(''); // State to capture user's input
  const [error, setError] = useState<string | null>(null);
  const [artists, setArtists] = useState<RecommendedArtist[]>([]);

  // when the component loads...
  // useEffect(() => {
  //   fetchArtists();
  // }, []);

  //  we want to fetch the artist data and put it in state
  const fetchArtists = async () => {
    try {
      const data = await retrieveArtists();
      console.log('log: data', data);
      setArtists(data.toptracks.track);
    } catch (err) {
      console.log('Error from data retrieval:', err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted");

    //  send favoriteArtist to an API or fetch artist info
    if (favoriteArtist) {
      try {
        const response = await fetch(`/api/artists/tracksByArtist?artist=${encodeURIComponent(favoriteArtist)}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.getToken()}`
          }
        });
        const data = await response.json();
        console.log('log: data', data);
        if (response.ok) {
          setArtists(data.toptracks.track); // Add the new artist to the list
          setFavoriteArtist(''); // Clear input field after submission
        } else {
          setError("Artist not found");
        }
      } catch (error) {
        setError("Failed to fetch artist data");
      }
    }
  };

  console.log('log: artists', artists);

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
      {artists?.map((artist) => (
        <RecommendedArtistCard key={artist.name} artist={artist} />
      ))}
    </section>
  );
};

export default Discover;
