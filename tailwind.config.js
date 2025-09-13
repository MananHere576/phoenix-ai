/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
  
        
        
        border: "#374151",      // Dark Gray for borders
        input: "#374151",       // Dark Gray for input fields
        ring: "#3B82F6",        // Bright Blue for focus rings
        background: "#111827",  // Very Dark Slate Blue for page background
        foreground: "#E5E7EB",  // Light Gray for body text

        // Primary action color (buttons, links)
        primary: {
          DEFAULT: "#3B82F6",    // A vibrant, accessible blue that pops
          foreground: "#FFFFFF", // White text on primary buttons
        },

        // Secondary action color
        secondary: {
          DEFAULT: "#1F2937",    // A strong Teal for secondary actions
          foreground: "#FFFFFF", // White text on secondary buttons
        },

        // Destructive action color (delete, cancel)
        destructive: {
          DEFAULT: "#EF4444",    // Standard Red for warnings
          foreground: "#FFFFFF", // White text on destructive buttons
        },

        // Muted colors for less important text and elements
        muted: {
          DEFAULT: "#374151",    // Dark Gray, same as border
          foreground: "#ffffffff", // Lighter Gray for muted text
        },

        // Accent color (can be used for highlights)
        accent: {
          DEFAULT: "#3B82F6",    // Same as primary for consistency
          foreground: "#FFFFFF",
        },

        // Popover color (tooltips, dropdowns)
        popover: {
          DEFAULT: "#1F2937",    // Dark Slate, same as card
          foreground: "#E5E7EB", // Light Gray text
        },

        // Card color (main content panels)
        card: {
          DEFAULT: "#1F2937",    // Dark Slate, slightly lighter than background
          foreground: "#E5E7EB", // Light Gray text
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

