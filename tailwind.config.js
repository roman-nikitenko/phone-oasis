import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#313237',
        Secondary: '#89939A',
        Icons: '#B4BDC3',
        Elements: '#E2E6E9',
        'Hover-BG': '#FAFBFC',
        White: '#FFFFFF',
        Green: '#27AE60',
        Red: '#EB5757',
      },
    },
  },
  plugins: [],
})


