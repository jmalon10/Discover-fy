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
      console.log(artists);
    };

    loadArtistImages();
  }, []);
  return (
    <div className="container mt-5">
      {/* Header */}
      <header className="text-center">
  <p className="text-lg font-bold">
    Discover Top Tracks from Artists You Love <span className="text-red-500">❤️</span>
  </p>
</header>
    {/* Artist Images Section */}
<section className="artist-images text-center mt-4">
  <h2 className="text-2xl font-bold mb-4">Popular Artists</h2>
  <div className="flex flex-wrap justify-center gap-6 mt-3">
    <div className="w-40">
      <img
        src="https://e-cdn-images.dzcdn.net/images/artist/ed04cfc9f8c7c016277edf011439d0ac/500x500-000000-80-0-0.jpg"
        alt="Ariana Grande"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 text-lg font-medium">Ariana Grande</p>
    </div>
    <div className="w-40">
      <img
        src="https://e-cdn-images.dzcdn.net/images/artist/8eab1a9a644889aabaca1e193e05f984/500x500-000000-80-0-0.jpg"
        alt="Billie Eilish"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 text-lg font-medium">Billie Eilish</p>
    </div>
    <div className="w-40">
      <img
        src="https://e-cdn-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/500x500-000000-80-0-0.jpg"
        alt="Drake"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 text-lg font-medium">Drake</p>
      </div>
    <div className="w-40">
      <img
        src="https://e-cdn-images.dzcdn.net/images/artist/c5cd33708174e92c8e17d3c35fd8a033/500x500-000000-80-0-0.jpg"
        alt="J Balvin"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 text-lg font-medium">J Balvin</p>
    </div>
    <div className="w-40">
      <img
        src="https://e-cdn-images.dzcdn.net/images/artist/65e0e96b7e014a245d693bad8bad57fc/500x500-000000-80-0-0.jpg"
        alt="SZA"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 text-lg font-medium">SZA</p>
    </div>
  </div>
</section>

      {/* Call to Action Button */}
      <section className="text-center mt-4">

        <Link to="/discover">
          <button className="btn btn-primary btn-lg">Start Discovering</button>
        </Link>
      </section>
    </div>
  );
};

export default ArtistSearch;