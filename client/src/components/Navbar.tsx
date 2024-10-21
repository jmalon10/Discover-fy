// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import auth from '../utils/auth';

// const Navbar = () => {
//   // State to track the login status
//   const [loginCheck, setLoginCheck] = useState(false);
//   const currentPage = useLocation().pathname;

//   // Function to check if the user is logged in using auth.loggedIn() method
//   const checkLogin = () => {
//     if (auth.loggedIn()) {
//       setLoginCheck(true);  // Set loginCheck to true if user is logged in
//     }
//   };

//   // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
//   useEffect(() => {
//     checkLogin();  // Call checkLogin() function to update loginCheck state
//   }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

//   return (
//     <div className="navbar">
//       <h1>
//         DISCOVER-FY
//       </h1>
//       <ul className="display-flex">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Discover"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Discover' ? 'nav-link active' : 'nav-link'}
//         >
//           Discover 
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Playlists"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Playlists' ? 'nav-link active' : 'nav-link'}
//         >
//           Playlists
//         </Link>
//       </li>
//     </ul>
//       <div>
//         {
//           // Conditional rendering based on loginCheck state
//           !loginCheck ? (
//             // Render login button if user is not logged in
//             <button className="btn" type='button'>
//               <Link to='/login'>Login</Link>
//             </button>
//           ) : (
//             // Render logout button if user is logged in
//             <button className="btn" type='button' onClick={() => {
//               auth.logout();  // Call logout() method from auth utility on button click
//             }}>Logout</button>
//           )
//         }
//       </div>
//     </div>
//   )
// }

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
    <div className="navbar bg-gray-800 text-white p-4 shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] rounded-lg flex items-center justify-between mt-4">
      <h1>DISCOVER-FY</h1>
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
            className={`nav-link ${currentPage === '/Playlists' ? 'active text-activeGreen' : 'text-white'}`}
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