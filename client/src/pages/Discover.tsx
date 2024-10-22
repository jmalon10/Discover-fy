import { useState } from "react";
import { RecommendedArtist } from "../interfaces/RecommendedArtist";
import Auth from '../utils/auth';
import TopTracksCard from "../components/TopTracksCard";

const Discover = () => {
  const [favoriteArtist, setFavoriteArtist] = useState<string>(''); // State to capture user's input
  const [error, setError] = useState<string | null>(null);
  const [artists, setArtists] = useState<RecommendedArtist[]>([]);

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
          // setFavoriteArtist(''); // Clear input field after submission *** if this is uncommented the playlist will not show the input name
        } else {
          setError("Artist not found");
        }
      } catch (error) {
        setError("Failed to fetch artist data");
      }
    }
  };

  console.log('log: artists', artists);
  const tracks = artists.map((artist) => artist.name);
  console.log('log: tracks', tracks);

  return (
    <section>
      <h1 className="text-1xl md:text-5xl font-bold italic">
      Lets start discovering new music!
      </h1>

      {/* Form to enter favorite artist */}
      <form onSubmit={handleSubmit} className="mt-8">
        <label htmlFor="favoriteArtist" className="text-lg mr-4">
          Enter your favorite artist:
          </label>
        <input
          type="text"
          className="text-black ml-2"
          id="favoriteArtist"
          value={favoriteArtist}
          onChange={(e) => setFavoriteArtist(e.target.value)} // Update state when user types
        />
        <button 
  type="submit" 
  className="bg-[#1DB954] text-white font-semibold py-2 px-4 rounded-lg shadow-lg border-2 border-darkerBg transition duration-300 hover:bg-green-600 hover:shadow-xl m-2"
>
  Submit
</button>
      </form>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Map through the list of recommended artists */}
      {/* display the top tracks card only when the submit buttn is pushed */}
      {tracks.length > 0 && (
      <TopTracksCard FavoriteArtist={favoriteArtist} tracks={tracks} />)}
    </section>
  );
};

export default Discover;
