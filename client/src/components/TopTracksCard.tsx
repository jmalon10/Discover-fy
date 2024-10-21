import type React from 'react';


// Define the props for the component
interface TopTracksProps {
    FavoriteArtist: string;
    tracks: String[]; // artist is a RecommendedArtist object
}

// Define the component
const TopTracksCard: React.FC<TopTracksProps> = ({ tracks, FavoriteArtist }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-sm mx-auto overflow-hidden">
            <div className="p-6">
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