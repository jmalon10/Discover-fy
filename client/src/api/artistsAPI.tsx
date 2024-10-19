import Auth from '../utils/auth';

const retrieveArtists = async () => {
    try {
      const response = await fetch('/api/artists/tracksByArtist', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
      console.log(`retreiving artist data`, data);

      const tracks = data.toptracks.track;
      tracks.forEach((track: any, index: number) => {
        console.log(`Track ${index + 1}: ${track.name}`);
      });

      if(!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from data retrieval:', err);
      return [];
    }
  }
  
  export { retrieveArtists };
  