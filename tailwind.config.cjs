const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    ComponentsContentPath,
  ],
  theme: {
    extend: {
      colors: {
        "text": "black",
        "brand-primary": "#1B78D0",
        "brand-secondary": "#073866",
        "brand-blue": "#0F70F0",
        "brand-gray": {
          100: "#F7F8F8",
          200: "#EEEFF0",
          300: "#E4E8EC",
          400: "#DADCE0",
          500: "#757575",
          600: "#555555",
          700: "#272D39",
        },
        "concrete": {
          "reg": "#c5cace",
          "highlight": "#8996a0"
        },
        "strategy": "rgba(33,134,162,.5)",
        "principle": "rgba(238,192,86,.8)",
        "initiative": "rgba(210,85,115,.6)",
        "complete": "rgba(135,171,80,.6)",
        "in-progress": "rgba(238,192,86,.8)",
        "not-started": "rgba(137,150,160,.7)"
      },
      fontFamily: {
        primary: "'Gilroy','Helvetica','sans-serif','system'",
        secondary: "'Inter','Helvetica','sans-serif','system'",
      },
      boxShadow: {
        "brand-shadow": "0 -1px 0 0 #CCC inset",
        "card-shadow": "0 0 10px 3px rgba(0, 0, 0, 0.24)",
      },
      width: {
        "tile": "30px",
        "card-tile": "10px",
        "facets": "30%",
        "dropdown": "172px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};