import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
          50: "#E2E2E2",
          100: "#C0BCC4",
          150: "#AAAAAA",
        },
        blue: {
          DEFAULT: "#37294D",
          50: "#0C0D1A",
          100: "#1F1025",
        },
        gray: {
          DEFAULT: "#CBCBCB",
          50: "#9CA3AF",
        },
        orange: {
          DEFAULT: "#FB8A05",
        },
        red: {
          DEFAULT: "#FF0101",
        },
        green: {
          DEFAULT: "#9EC045",
        },
      },
      backgroundImage: {
        "dashboard-gradient":
          "linear-gradient(200deg, #171029, #192336, #2A1D3C, #2C2239, #1E122A)",
        "card-gradient": "linear-gradient(to bottom right, #694D71, #2C227E)",
      },
      borderImage: {
        gradient: "linear-gradient(to right, #11FFFF, #B496B1, #ED4137) 1",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.9)", opacity: "0.4" },
        },
        burn: {
          "0%": {
            color: "rgba(255, 130, 110, 1)",
            background: "rgba(255, 230, 110, 1)",
            boxShadow:
              "0 0 5px 0 rgba(200, 0, 10, 1), 0 0 5px 0 rgba(230, 30, 10, 0.8), 0 0 5px 0 rgba(230, 230, 10, 0.6)",
          },
          "100%": {
            color: "rgba(0, 0, 0, 1)",
            background: "rgba(255, 255, 255, 1)",
            boxShadow:
              "0 -35px 40px 30px rgba(255, 130, 10, 0), 0 -30px 30px 10px rgba(230, 30, 10, 0), 0 -20px 10px 0 rgba(255, 255, 10, 0)",
          },
        },
        flare: {
          "100%": {
            transform: "translateY(-20px) scale(1.5)",
            filter: "blur(10px)",
            opacity: "0",
          },
        },
        ring: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "1%": { transform: "rotate(30deg)" },
          "3%": { transform: "rotate(-28deg)" },
          "5%": { transform: "rotate(34deg)" },
          "7%": { transform: "rotate(-32deg)" },
          "9%": { transform: "rotate(30deg)" },
          "11%": { transform: "rotate(-28deg)" },
          "13%": { transform: "rotate(26deg)" },
          "15%": { transform: "rotate(-24deg)" },
          "17%": { transform: "rotate(22deg)" },
          "19%": { transform: "rotate(-20deg)" },
          "21%": { transform: "rotate(18deg)" },
          "23%": { transform: "rotate(-16deg)" },
          "25%": { transform: "rotate(14deg)" },
          "27%": { transform: "rotate(-12deg)" },
          "29%": { transform: "rotate(10deg)" },
          "31%": { transform: "rotate(-8deg)" },
          "33%": { transform: "rotate(6deg)" },
          "35%": { transform: "rotate(-4deg)" },
          "37%": { transform: "rotate(2deg)" },
          "39%": { transform: "rotate(-1deg)" },
          "41%": { transform: "rotate(1deg)" },
          "43%": { transform: "rotate(0deg)" },
        },
        animate: {
          "0%": { transform: "translate(-25%, -75%) rotate(0)" },
          "100%": { transform: "translate(-25%, -75%) rotate(360deg)" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
        waves: {
          "0%, 100%": {
            clipPath: "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath: "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        }
      },
      animation: {
        wave: "wave 2s infinite ease-in-out",
        burn: "burn 1s ease-out forwards",
        flare: "flare 1s ease-out forwards",
        ring: "ring 4s 0.7s ease-in-out infinite",
        animate_5s_linear_infinite: "animate 5s linear infinite",
        animate_7s_linear_infinite: "animate 7s linear infinite",
        border: "border 4s linear infinite",
        waves: "waves 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
