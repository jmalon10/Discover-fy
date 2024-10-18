import React, { useState } from 'react';

const ArtistForm: React.FC = () => {
    const [artistName, setArtistName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [suggestion, setSuggestion] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArtistName(e.target.value);
        setError(null);
        setSuggestion(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!artistName) {
            setError('Artist name is required.');
            return;
        }

        try {
            const response = await fetch('api/artist-info', {   // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ artist: artistName }),
            });
            const data = await response.json();

            if (data.error) {
                if (data.error === 6) { // Artist not found
                    setError(`Artist not found: ${artistName}`);
                    setSuggestion(data.message); // Assuming Last.fm returns suggestions in the message
                } else {
                    setError(`Error: ${data.message}`);
                }
                return;
            }

            // Save artist to the database (replace with your API call)
            await saveArtistToDatabase(artistName);
            setArtistName(''); // Reset input after successful save
            setError(null); // Clear any previous error
            setSuggestion(null); // Clear suggestion
        } catch (error) {
            console.error(error);
            setError('An error occurred while fetching artist information.');
        }
    };

    const saveArtistToDatabase = async (artist: string) => {
        // Replace this with your actual database API call
        await fetch('/api/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: artist }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="artistName">Artist Name:</label>
                <input
                    type="text"
                    id="artistName"
                    value={artistName}
                    onChange={handleChange}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {suggestion && <p style={{ color: 'blue' }}>Did you mean: {suggestion}?</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default  ArtistForm;
