/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file.
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the src directory.
  ],
  theme: {
    extend: {
      colors: {
        activeGreen: '#1DB954',    // Active link color
        darkBg: '#212121',          // Dark background color
        darkerBg: '#121212',        // Darker background color
        mediumGray: '#535353',      // Medium gray color
        lightGray: '#B3B3B3',       // Light gray color
        GreenStart: "#1DB954",      // Spotify's classic green.
        GreenEnd: "#1ED760",        // A lighter green shade for the gradient.
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"], // Use 'Noto Sans' as the default sans-serif font.
      heading: ["Noto Sans", "sans-serif"], // Custom font name for headings if needed.
    },
  },
  plugins: [], // Add Tailwind plugins here if you need extra functionality.
};
