import { useEffect, useState } from "react";

const Discover = () => {
    const [artist, setArtist] = useState<RecommendedArtist | null>({} as RecommendedArtist);
    // when the component loads...
    useEffect(() => {
      getRecommendedArtistData();
    }, []);
    const getRecommendedArtistData = async () => {
      // fetch the data from the API
      const response = await fetch("/api/recommendedArtists");
      const data = await response.json();
      console.log(data);
    }
    //  we want to fetch the artist data and put it in state

    return (
      <section>
        <h1>This is the discover page!</h1>

        </section>
    );
  };
  
  export default Discover;