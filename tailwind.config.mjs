/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Background layers (3 tones, warm neutrals)
                'bg-primary': '#FDFBF7',      // Warm off-white - main pages
                'bg-secondary': '#F5F1EB',    // Light stone/sand - sections
                'bg-surface': '#EBE7E0',      // Slightly darker - cards, tables

                // Text layers (2 tones, not black)
                'text-primary': '#2D2D2D',    // Soft charcoal - headings
                'text-secondary': '#6B6B6B',  // Muted gray - body text

                // Accent color (warm & confident)
                'accent': '#D97642',          // Warm terracotta
                'accent-hover': '#C26634',    // Darker on hover
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
};