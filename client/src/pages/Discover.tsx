import { useEffect, useState } from "react";
import { RecommendedArtist } from "../interfaces/RecommendedArtist"

import RecommendedArtistCard from "../components/RecommendedArtistCard";

const Discover = () => {
    const [artists, setArtists] = useState<RecommendedArtist[] | null>([] as RecommendedArtist[]);
    const [error, setError] = useState<string | null>(null);
    //create a form component that will allow users to enter their favorite artist
    // uses the useState hook to create a state variable called artists, 
    //which is an array of RecommendedArtist objects. 
    //We initialize it to an empty array.
    // when the component loads...


    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Form submitted");
      setArtists([]);
      getRecommendedArtistData();
      
    }// create a function called handleSubmit that logs "Form submitted" 
    //to the console when the form is submitted.

    
    
    useEffect(() => {
      getRecommendedArtistData();
    }, []);
    const getRecommendedArtistData = async () => {
      // fetch the data from the API
      const response = await fetch("/api/recommendedArtists");
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setArtists(data);// set the artists state variable to the data we fetched
      } else {
        setError("An error occurred");
      }
    }
    //  we want to fetch the artist data and put it in state

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