
// export default Home;
//import React from 'react';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';


const HomePage = () => {
  const [artists, setArtists] = useState([]);





    useEffect(() => {
        // Fetch artist data when the component mounts
        const fetchArtists = async () => {
          try {
            const apiKey = process.env.REACT_APP_LASTFM_API_KEY; // Store your API key in a .env file
            const response = await axios.get(
              `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
            );
            setArtists(response.data.artists.artist); // Store artists in the state
          } catch (error) {
            console.error('Error fetching artist data:', error);
          }
        };
    
        fetchArtists();
      }, []);


    return (
        <div>
       <header>
           <h1> Welcome to discover-FY</h1>
           <p>Your personal music playlist manager</p>
      </header>
        <section className="container">
            <div className="row">
            <div className="col-md-6">
                <h2>Manage Your Playlists</h2>
                <p>
                Create and manage your playlists with ease. Add or remove songs
                from your playlists. Edit the song details, such as the title,
                artist, and album.
                </p>
                <Link to="/playlists" className="btn btn-primary">
                View Playlists
                </Link>
            </div>
            <div className="col-md-6">
                <img
                src="playlist.jpg"
                alt="Playlist"
                className="img-fluid rounded"
                />
            </div>
            </div>
</section>
{/* //artist image section */}

<section className="artist-images text-center mt-4">
        <h2>Discover New Artists</h2>
        <div className="row mt-3">
          {/* Replace the placeholders with artist images */}
          <div className="col-md-3">
            <img src="artist1.jpg" alt="Artist 1" className="img-fluid" />
            <p>Artist 1</p>
          </div>
          <div className="col-md-3">
            <img src="artist2.jpg" alt="Artist 2" className="img-fluid" />
            <p>Artist 2</p>
          </div>
          <div className="col-md-3">
            <img src="artist3.jpg" alt="Artist 3" className="img-fluid" />
            <p>Artist 3</p>
          </div>
          <div className="col-md-3">
            <img src="artist4.jpg" alt="Artist 4" className="img-fluid" />
            <p>Artist 4</p>
            </div>
        </div>
      </section>

      {/* //call to action */}

        <section className ="text-center mt-4">
            <h2>Ready to get started?</h2>
            <Link to="/discover" className="btn btn-primary">
                <button>Discover New Music</button>
              
            </Link>
        </section>

       {/* //footer */}
         <footer className="text-center mt-4">
            <p>&copy; 2021 discover-FY</p>
        </footer>

        </div>
    
    );
}
 export default HomePage;