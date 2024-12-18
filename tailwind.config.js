/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        /* Adjust the lighter color (#6df954) to a darker shade */
        "radial-custom":
          "radial-gradient(circle closest-side, #57d147, #2fb78a)",
      },
      transitionTimingFunction: {
        "custom-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      maxWidth: {
        custom: "74rem",
        tab: "32rem",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "85%": { transform: "translateX(5%)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "85%": { transform: "translateX(-5%)", opacity: "1" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideInToTop: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "50%": { transform: "translateY(50%)", opacity: "0" },
          "85%": { transform: "translateY(-5%)", opacity: "1" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        transform: {
          "custom-otate": "rotateX(360deg)",
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-out",
        slideInFromRight: "slideInFromRight 1s ease-out", 
        slideInToTop: "slideInToTop 2s ease-out", 
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('hover-supported', '@media (hover: hover) and (pointer: fine)');
    },
  ],
};
