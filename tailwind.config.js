/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter-ff": "var(--inter-ff)",
      "archive-ff": "var(--archive-ff)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        text: {
          DEFAULT: "hsl(var(--text))",
          details: "hsl(var(--text-details))",
          label: "hsl(var(--text-label))",
          secondary: "hsl(var(--text-secondary))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        heading: {
          DEFAULT: "hsl(var(--heading-primary))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          darkened: "hsl(var(--background-darkened))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          darkened: "hsl(var(--primary-darkened))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          darkened: "hsl(var(--secondary-darkened))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          darkened: "hsl(var(--secondary-darkened))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
