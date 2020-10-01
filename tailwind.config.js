/* eslint-disable global-require */
module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    colors: {
      /** Brand guideline colours */
      black: "#000",
      white: "#fff",
      green: {
        primary: "#8FC043",
        light1: "#BADA8C",
        light2: "#D1E5B0",
        light3: "#EAF3DA"
      },
      grey: {
        primary: "#7F8083",
        dark1: "#19191A",
        light1: "#CDCCCB",
        light2: "#EFEFEF"
      },
      blue: {
        1: "#44BFB8",
        2: "#8FD3D2",
        3: "#C5E8F3 ",
        4: "#F0F6FB"
      },
      purple: {
        primary: "#36385B",
        light1: "#72738A"
      },
      red: {
        primary: "#D81543",
        light1: "#F4C0C4"
      },
      orange: {
        primary: "#FC7F04"
      }
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      serif: ["serif"],
      mono: ["monospace"]
    },
    placeholderColor: theme => theme("colors.grey.1"),
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vw"
    })
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: [],
    fontSize: ["responsive"],
    fontSmoothing: [],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: [],
    justifyContent: ["responsive"],
    letterSpacing: [],
    lineHeight: [],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    placeholderColor: [],
    pointerEvents: [],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: [],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"]
  },
  corePlugins: {}
};
