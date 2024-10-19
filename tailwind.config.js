/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file.
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the src directory.
  ],
  theme: {
    extend: {}, // This is where you can customize your theme, such as adding new colors or fonts.
    GreenStart: "#1DB954", // Spotify's classic green.
    GreenEnd: "#1ED760", // A lighter green shade for the gradient.
  },
  plugins: [], // Add Tailwind plugins here if you need extra functionality.
};
