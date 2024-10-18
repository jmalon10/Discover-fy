import { useEffect, useState } from "react";
import { RecommendedArtist } from "../interfaces/recommendedArtist";
import RecommendedArtistCard from "../components/RecommendedArtistCard";
import { retrieveArtists} from "../api/artistsAPI"

const Discover = () => {
    const [artists, setArtists] = useState<RecommendedArtist[] | null>([
      {
        Name: "Lady Gaga",
        TopTracks: ["Bad Romance", "Judas", "Rain on Me"],
      },
      {
        Name: "Ariana Grande",
        TopTracks: ["7 Rings", "Thank You Next", "Into You"],
      },  
    ] as RecommendedArtist[]);
    // when the component loads...
    useEffect(() => {
      fetchArtists();
    }, []);
    //  we want to fetch the artist data and put it in state
    const fetchArtists = async () => {
      try { 
    const data = await retrieveArtists();
          setArtists(data)
      } 
      catch (err) {
        console.log('Error from data retrieval:', err);
      }
    }
    
    return (
      <section>
        <h1>This is the discover page!</h1>
        {artists?.map((artist) => (
          <RecommendedArtistCard key={artist.Name} artist={artist} />
        ))}
        </section>
    );
  };
  
  export default Discover;