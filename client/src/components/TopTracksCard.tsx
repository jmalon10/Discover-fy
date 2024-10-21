import type React from 'react';
import { retrieveArtistImage } from '../api/ArtistImageAPI';
import { useState, useEffect } from 'react';
import { ArtistImage } from '../interfaces/deezer.interface';


// Define the props for the component
interface TopTracksProps {
    FavoriteArtist: string;
    tracks: String[]; // artist is a RecommendedArtist object
}



// Define the component
const TopTracksCard: React.FC<TopTracksProps> = ({ tracks, FavoriteArtist }) => {
    const [artistImage, setArtistImage] = useState<ArtistImage | null>(null);

    // useEffect to run when the component mounts
    useEffect(() => {
        // Call the function to retrieve the artist image
        ascertainArtistImage();
    }, [FavoriteArtist]);

    const ascertainArtistImage = async () => {
        try {
            const data = await retrieveArtistImage();
            setArtistImage(data);
        } catch (error) {
            console.log('Error retrieving artist image:', error);
        }
    }


    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-sm mx-auto overflow-hidden">
            <div className="p-6">
                <img src={artistImage?.picture_big} alt="artist" className="rounded-full mx-auto" />
                <h5 className="text-lg font-semibold text-center mb-4">{FavoriteArtist}</h5> {/* placeholder title, will need to add "entered artist name" */}
                <ul className= "space-y-3">
                    {/*create a listed item with each string in the tracks array*/}
                    {tracks.map((track, index) => (
                        <li key={index} className= "text-sm flex items-center justify-between p-2 hover:bg-blue-700 rounded transition">{track}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopTracksCard;