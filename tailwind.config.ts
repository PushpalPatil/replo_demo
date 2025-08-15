import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Replo brand colors
        'blue-project': '#274AE2',
        'pink-project': '#FFD8DD',
        'lavender-project': '#EED8FB',
        'light-blue': '#D4EFFF',
        'mint-project': '#C3ECC9',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
        'aeonik': ['Aeonik', 'Arial', 'sans-serif'],
        'space-mono-one': ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'replo': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'replo-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'replo': '12px',
        'replo-lg': '16px',
      },
    },
  },
  plugins: [],
}
export default config