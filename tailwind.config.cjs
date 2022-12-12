/** @type {import('tailwindcss').Config} */
// typescript
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "70vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      backgroundImage: {
        backgroundTexture: "url('/src/assets/background.png')",
        backgroundTextureLight: "url('/src/assets/backgroundLight.png')",
        hero: "url('/src/assets/hero.png')",
        textBackground: "url('/src/assets/textBackground.png')",
        instagramIcon: "url('/src/assets/instagram.png')",
        soundcloudIcon: "url('/src/assets/soundcloud.png')",
        spotifyIcon: "url('/src/assets/spotify.png')",
        bandcampIcon: "url('/src/assets/bandcamp.png')",
      },
    },
  },
  plugins: [],
};
