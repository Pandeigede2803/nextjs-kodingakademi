module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "9%": "9%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "30%": "30%",
        "70%": "70%",
        "85%": "85%",
        "90%": "90%",
        "91%": "91%",
      },
      width: {
        "29rem": "29rem",
      },
      colors: {
        "bg-gray": "#f8f8f8",
        "bg-danger": "#a50034",
        "bg-primary": "#824242",
        "bg-primary-darker": "#633737",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.7s ease-out",
        "fade-in-down": "fade-in-down 0.7s ease-out",
        "fade-out-down": "fade-out-down 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "fade-out-up": "fade-out-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
