import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1210px",
    },
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1210px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        white: "#FFFFFF",
        orange: {
          "100": "#FFEFEB",
          "200": "#FEE0D7",
          "300": "#FDC0AF",
          "400": "#FDA188",
          "500": "#FB6238",
          "600": "#CB4F2D",
          "700": "#9B3C22",
          "800": "#6B2916",
          "900": "#531F11",
        },
        yellow: {
          "100": "#FEF7E7",
          "200": "#FDEFD0",
          "300": "#FCE7B8",
          "400": "#FBDFA1",
          "500": "#F5AE14",
          "600": "#573E07",
          "700": "#6D4E09",
          "800": "#6D4E09",
          "900": "#573E07",
        },
        "light-green": {
          "100": "#EDF5DB",
          "200": "#DBECB7",
          "300": "#CAE292",
          "400": "#B8D96E",
          "500": "#A6CF4A",
          "600": "#85A63B",
          "700": "#647C2C",
          "800": "#42531E",
          "900": "#323E16",
        },
        pink: {
          "100": "#FFEFF6",
          "200": "#FFCFE5",
          "300": "#FFA0CB",
          "400": "#FF80B9",
          "500": "#FF60A8",
          "600": "#D74D8B",
          "700": "#AF3A6F",
          "800": "#872652",
          "900": "#731D44",
        },
        neutral: {
          "100": "#EEEEF2",
          "200": "#C0CAD9",
          "300": "#A1A8B2",
          "400": "#8C95A3",
          "500": "#848D9B",
          "600": "#4A5463",
          "700": "#343C48",
          "800": "#1E242D",
          "900": "#181D24",
        },
      },
      boxShadow: {
        "3xl": "-8px 14px 56px 0px rgba(0, 0, 0, 0.10)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
