export default interface RecommendedArtist {
  readonly Name: string; //from form entry
  readonly TopTracks: string[]; //need API call Artist.getTopTracks
};