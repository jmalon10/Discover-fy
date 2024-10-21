import { ArtistImage } from '../interfaces/deezer.interface';
import Auth from '../utils/auth';

const retrieveArtistImage = async (artist: ArtistImage) => {
    try {
      const response = await fetch('/api/artists/artist-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        },
        body: JSON.stringify(artist)
      });

      const data = await response.json();
      if(!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
      return data;
  
    } catch (err) {
      console.log('Error from data retrieval:', err);
      return [];
    }
  }

  export { retrieveArtistImage };  // Export the login function to be used elsewhere in the application