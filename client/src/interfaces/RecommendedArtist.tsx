export interface RecommendedArtist {
  readonly name: string; //from form entry
  readonly toptracks: string[]; //need API call Artist.getTopTracks
};