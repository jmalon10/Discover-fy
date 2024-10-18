

//import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';   

import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
import auth from '../utils/auth';

const HomePage = () => {

    const [users, setUsers] = useState<UserData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        if (loginCheck) {
            fetchUsers();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }

    if (error) {
        return <ErrorPage />;
    }




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
        
        
            <div className="col-md-3">
                <img src=""alt="Ariana Grande" className="img-fluid" />
                <p>Artist 1</p>
            </div>
          <div className="col-md-3">
            <img src=""alt="Taylor Swift" className="img-fluid" />
            <p>Artist 2</p>
          </div>

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
