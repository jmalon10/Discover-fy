import type React from 'react';
import type { RecommendedArtist } from '../interfaces/RecommendedArtist'

// Define the props for the component
interface RecommendedArtistCardProps {
    artist: RecommendedArtist; // artist is a RecommendedArtist object
}

// Define the component
const RecommendedArtistCard: React.FC<RecommendedArtistCardProps> = ({ artist }) => {
    console.log()
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5> {/* placeholder title, will need to add "entered artist name" */}
                <ul>
                    {/* {artist.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))} */}
                </ul>
            </div>
        </div>
    );
};

export default RecommendedArtistCard;