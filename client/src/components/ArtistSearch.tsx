import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';   
import  Artist  from '../interfaces/artists';

//const API_KEY =import.meta.env.LASTFM_API_KEY as string;



const ArtistSearch = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Function to fetch artist info from Last.fm API
    const fetchArtistImage = async (artistName: string) => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artistName)}&api_key=045d5788747399c059939c53d984ca59&format=json`
        );
        const data = await response.json();
        console.log('API response:', data); // Inspect the full API response

        if (data.artist && data.artist.image) {
          // Find the image with the size 'extralarge'
          const image = data.artist.image.find((img: any) => img.size === 'extralarge')?.['#text'];
          return image || ''; // Return image or an empty string if not found
        } else {
          console.error('No image found for artist:', artistName);
          return ''; // Return an empty string if no image is found
        }
      } catch (error) {
        console.error('Error fetching artist image:', error);
        return ''; // Return an empty string on error
      }
    };

    // Fetch artist names and images
    const loadArtistImages = async () => {
      const artistNames = ['Ariana Grande', 'Taylor Swift', 'Ed Sheeran']; // List of artist names to display
      const updatedArtists = await Promise.all(
        artistNames.map(async (artistName) => {
          const image = await fetchArtistImage(artistName);
          return { name: artistName, image };
        })
      );
      setArtists(updatedArtists);
    };

    loadArtistImages();
  }, []);

  return (
    <div className="container mt-5">
      {/* Header */}
      <header className="text-center">
       
        <p>Your personal music playlist manager</p>
      </header>

      {/* Artist Images Section */}
      <section className="artist-images text-center mt-4">
        <h2>Discover New Artists</h2>
        <div className="row mt-3">
          {artists.map((artist, index) => (
            <div key={index} className="col-md-3">
              {artist.image ? (
                <img src={artist.image} alt={artist.name} className="img-fluid" />
              ) : (
                <p>No image available</p>
              )}
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="text-center mt-4">
        <h3>Ready to discover your next playlist?</h3>
        <Link to="/discover">
          <button className="btn btn-primary btn-lg">Start Discovering</button>
        </Link>
      </section>
    </div>
  );
};

export default ArtistSearch;