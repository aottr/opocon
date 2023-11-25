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
        cheese1: '#F2AE30',
        cheese2: '#F29422',
        cheese3: '#F2C288',
        cheese4: '#F28F38'
      },
    },
  },
  plugins: [],
}
export default config
