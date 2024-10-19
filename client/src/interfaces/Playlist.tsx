export interface Track {
    id: number;
    name: string;
    artist: string;
}

export interface PlaylistData {
    id: number;
    title: string;
    image: string;
    tracks: Track[];
}