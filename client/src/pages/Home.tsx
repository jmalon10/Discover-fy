import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';   




interface Artist {
  name: string;
  image: string;
}

const HomePage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Function to fetch artist info from Last.fm API
    const fetchArtistImage = async (artistName: string) => {
      const API_KEY = import.meta.env.VITE_LASTFM_API_KEY as string;
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${(artistName)}&api_key=${API_KEY}&format=json`
      );
      const data = await response.json();
      const image = data.artist?.image?.find((img: any) => img.size === 'extralarge')?.['#text'] || '';
      return image;
    };

    // Fetch artist names and images
    const loadArtistImages = async () => {
      const artistNames = ['Ariana Grande', 'Taylor Swift', 'Ed Sheeran', 'Billie Eilish']; // List of artist names to display
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
        <h1>Welcome to Discover-fy</h1>
        <p>Your personal music playlist manager</p>
      </header>

      {/* Artist Images Section */}
      <section className="artist-images text-center mt-4">
        <h2>Discover New Artists</h2>
        <div className="row mt-3">
          {artists.map((artist, index) => (
            <div key={index} className="col-md-3">
              <img src={artist.image} alt={artist.name} className="img-fluid" />
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
}

export default HomePage;
