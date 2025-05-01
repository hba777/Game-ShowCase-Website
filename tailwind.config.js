/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#101010",
          300: "#4fb7dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        neutral: {
          800: "#1a1a1a", // dark bg
          900: "#0f0f0f", // darker bg
        },
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: "#f5f5f5",
          800: "#2b2b2b", // dark gray for text
        },
        // Add light and dark theme colors
        light: {
          background: "#ffffff",
          foreground: "#1a1a1a",
          primary: "#5724ff",
          secondary: "#4fb7dd",
          accent: "#edff66",
          muted: "#f5f5f5",
        },
        dark: {
          background: "#0f0f0f",
          foreground: "#f5f5f5",
          primary: "#5724ff",
          secondary: "#4fb7dd",
          accent: "#8e983f",
          muted: "#2b2b2b",
        },
      },      
    },
  },
  plugins: [],
};
