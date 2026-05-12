import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#d9e4ff",
          200: "#b4c8ff",
          300: "#8aa6ff",
          400: "#5d80ff",
          500: "#2f57f5",
          600: "#1f3ad6",
          700: "#1a2ea8",
          800: "#152680",
          900: "#0e1a5c",
          950: "#070d33"
        },
        ink: {
          50: "#f7f7f8",
          100: "#eeeef1",
          200: "#d6d6dd",
          300: "#b3b4bf",
          400: "#878896",
          500: "#5f6172",
          600: "#3f4150",
          700: "#2b2d3a",
          800: "#1a1c26",
          900: "#0f1018",
          950: "#06060d"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(31,58,214,0.35), transparent 60%)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        shine: "shine 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(47, 87, 245, 0.35)",
        "glow-lg": "0 0 80px rgba(47, 87, 245, 0.45)",
        premium:
          "0 10px 40px -10px rgba(15, 16, 24, 0.5), 0 4px 12px -4px rgba(15, 16, 24, 0.3)"
      }
    }
  },
  plugins: []
};

export default config;
