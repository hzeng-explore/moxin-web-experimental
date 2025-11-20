/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas-white': '#FFFFFF',
        'canvas-grey': '#F5F5F7', // Apple-like light grey
        'text-primary': '#1D1D1F', // Almost black
        'text-secondary': '#86868B', // Apple grey
        'accent-blue': '#0071E3', // Apple blue
        'accent-purple': '#5E5CE6', // Apple purple (for highlights)
        'accent-pink': '#FF2D55', // Apple pink
        'accent-cyan': '#30B0C7', // Apple cyan
        'border-color': '#D2D2D7',
      },
      fontFamily: {
        'inter': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
