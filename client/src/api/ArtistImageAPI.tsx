import { ArtistImage } from '../interfaces/deezer.interface';
import Auth from '../utils/auth';

const retrieveArtistImage = async (artist: string): Promise<ArtistImage | null> => {  // Accept the artist name as a string
  try {
    const response = await fetch('/api/artists/artist-images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify({ artist }) // Send the artist name as an object
    });

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    const data = await response.json() as ArtistImage;
    return data;

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return null;
  }
};

export { retrieveArtistImage };