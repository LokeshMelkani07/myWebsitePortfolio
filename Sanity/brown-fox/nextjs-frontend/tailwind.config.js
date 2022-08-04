module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "400px",
      // => @media (min-width: 768px) { ... }

      lg: "800px",
      // => @media (min-width: 1024px) { ... }

      xl: "1000px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
