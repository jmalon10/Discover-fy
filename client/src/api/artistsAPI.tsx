import Auth from '../utils/auth';

const retrieveArtists = async () => {
    try {
      const response = await fetch('/api/artists', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
  

  }
  
  export { retrieveArtists };
  