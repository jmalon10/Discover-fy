
// export default Home;
//import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
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
       
        </div>
    );
}