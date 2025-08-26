/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/partials/**/*.{html,js}",
    "./src/assets/**/*.{html,js}",
    "./content-test.html"
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        // Consistent border radius system:
        // none: 0px - for sharp edges
        // xs: 2px - for very subtle rounding
        // sm: 4px - for small elements like badges
        // DEFAULT: 6px - for most UI components (buttons, cards, inputs)
        // md: 8px - for slightly larger components
        // lg: 12px - for containers and sections
        // xl: 16px - for large containers and hero sections
        // full: 9999px - for circular elements
        none: "0px",
        xs: "2px",
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
    },
  },
  plugins: [],
  safelist: [
    // Add classes that we know we're using to ensure they're generated
    'rounded-none',
    'rounded-xs',
    'rounded-sm',
    'rounded',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-full',
    'border',
    'border-border',
    'border-input',
    'mr-4',
    'ml-4',
    'mt-4',
    'mb-4',
    'pl-4',
    'pr-4',
    'pt-4',
    'pb-4',
    'text-center',
    'justify-center'
  ]
}