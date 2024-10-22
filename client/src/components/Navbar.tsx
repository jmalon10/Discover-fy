// export default Navbar;
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);
  const currentPage = useLocation().pathname;

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

  return (
    <div className="navbar bg-[#121212] text-white p-4 shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] rounded-lg flex items-center justify-between mt-4">
      <h1 className="font-bold text-shadow-green">
  DISCOVER-FY
</h1>

      <ul className="display-flex">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${currentPage === '/' ? 'active text-activeGreen' : 'text-white'}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Discover"
            className={`nav-link ${currentPage === '/Discover' ? 'active text-activeGreen' : 'text-white'}`}
          >
            Discover 
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/playlists"  // Changed to lowercase to match the route in App.tsx
            className={`nav-link ${currentPage === '/playlists' ? 'active text-activeGreen' : 'text-white'}`}
          >
            Playlists
          </Link>
        </li>
      </ul>
      <div>
  {!loginCheck ? (
    <button className="btn bg-activeGreen hover:bg-green-600 text-white py-2 px-4 rounded-lg">
      <Link to='/login' className="no-underline text-shadow-lg">Login</Link>
    </button>
  ) : (
    <button 
      className="btn bg-mediumGray hover:bg-lightGray text-white py-2 px-4 rounded-lg" 
      type='button' 
      onClick={() => {
        auth.logout();
      }}
    >
      <span className="text-shadow-lg">Logout</span>
    </button>
  )}
</div>

    </div>
  )
}

export default Navbar;