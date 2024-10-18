import type React from 'react';
import type { RecommendedArtist } from '../interfaces/recommendedArtist';

// Define the props for the component
interface RecommendedArtistCardProps {
    artist: RecommendedArtist; // artist is a RecommendedArtist object
}

// Define the component
const RecommendedArtistCard: React.FC<RecommendedArtistCardProps> = ({ artist }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{artist.Name}</h5> {/* placeholder title, will need to add "entered artist name" */}
                <ul>
                    {artist.TopTracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecommendedArtistCard;