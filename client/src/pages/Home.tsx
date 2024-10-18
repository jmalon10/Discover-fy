
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
        <section>
            <h2>Discover new music</h2>
            <p>Find new music to add to your playlist</p>
            <Link to="/discover">Discover</Link>


