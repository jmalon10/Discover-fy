
export default interface Artist {
    name: string;      // Name of the artist
    url: string;       // URL to the artist's Last.fm page
    image: Array<{     // Array of images in different sizes
      '#text': string; // URL of the image
      size: string;    // Size of the image (e.g., "small", "medium", "large")
    }>;
  }
