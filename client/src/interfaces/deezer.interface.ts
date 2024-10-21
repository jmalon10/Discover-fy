export interface ArtistImage {
    id: string;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
  }
  
  export interface DeezerApiResponse {
    data: ArtistImage[];
    total: number;
    next?: string;
  }