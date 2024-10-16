import { useEffect, useState } from "react";
import { RecommendedArtist } from "../interfaces/RecommendedArtist";
import RecommendedArtistCard from "../components/RecommendedArtistCard";

const Discover = () => {
  const [artists, setArtists] = useState<RecommendedArtist[]>([]); // Array of recommended artists
  const [error, setError] = useState<string | null>(null);
  const [favoriteArtist, setFavoriteArtist] = useState<string>(''); // State to capture user's input
  
  // Fetch recommended artist data when the component loads
  useEffect(() => {
    getRecommendedArtistData();
  }, []);

  const getRecommendedArtistData = async () => {
    try {
      const response = await fetch("/api/recommendedArtists");
      const data = await response.json();
      if (response.ok) {
        setArtists(data);
      } else {
        setError("An error occurred");
      }
    } catch (error) {
      setError("Failed to fetch recommended artists");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted");//

    //  send favoriteArtist to an API or fetch artist info
    if (favoriteArtist) {
      try {
        const response = await fetch(`/api/artists?name=${encodeURIComponent(favoriteArtist)}`);
        const data = await response.json();

        if (response.ok) {
          setArtists([...artists, data]); // Add the new artist to the list
          setFavoriteArtist(''); // Clear input field after submission
        } else {
          setError("Artist not found");
        }
      } catch (error) {
        setError("Failed to fetch artist data");
      }
    }
  };

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

     

      {/* Map through the list of recommended artists */}
      {artists?.map((artist) => (
        <RecommendedArtistCard key={artist.Name} artist={artist} />
        
      ))}
    </section>
  );
};

export default Discover;
