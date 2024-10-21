import type React from 'react';


// Define the props for the component
interface TopTracksProps {
    FavoriteArtist: string;
    tracks: String[]; // artist is a RecommendedArtist object
}

// Define the component
const TopTracksCard: React.FC<TopTracksProps> = ({ tracks, FavoriteArtist }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{FavoriteArtist}</h5> {/* placeholder title, will need to add "entered artist name" */}
                <ul>
                    {/*create a listed item with each string in the tracks array*/}
                    {tracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopTracksCard;