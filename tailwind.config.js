// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./src/tokens/dist/colors.json");
const typography = require("./src/tokens/dist/typography.json");
const defaultTheme = require("tailwindcss/defaultTheme");

const typographyProps = [
  "fontSize",
  "textDecoration",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "letterSpacing",
  "lineHeight",
  "textCase",
];

const generateTypography = (variant, theme) => {
  return typographyProps.reduce((acc, prop) => {
    return { ...acc, [prop]: theme(`${prop}.${variant}`) };
  }, {});
};

const generateHighlights = (theme) => {
  const generateColors = (colors, prefix) =>
    Object.keys(colors).reduce((acc, key) => {
      if (typeof colors[key] === "string") {
        return {
          ...acc,
          [`${prefix}-${key}`]: `linear-gradient(to top, transparent 8px, ${colors[key]} 8px, ${colors[key]} 19px, transparent 19px)`,
        };
      }

      const innerColors = generateColors(colors[key], `${prefix}-${key}`);

      return {
        ...acc,
        ...innerColors,
      };
    }, {});

  return generateColors(theme("colors"), "highlight");
};

const conf = {
  // purge: [],
  theme: {
    fontSize: { ...typography.fontSize },
    fontWeight: { ...typography.fontWeight },
    lineHeight: { ...typography.lineHeight },
    letterSpacing: { ...typography.letterSpacing },
    extend: {
      colors: {
        ...colors,
      },
      backgroundImage: (theme) => generateHighlights(theme),
      fontFamily: Object.fromEntries(
        Object.entries(typography.fontFamily).map(([fkey, fval]) => [
          fkey,
          [fval, ...defaultTheme.fontFamily.sans].join(","),
        ])
      ),
      scale: {
        mirror: "-1",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.light['on-background'].900"),
            maxWidth: "72ch",

            p: {
              ...generateTypography("base", theme),
              paddingBottom: "1rem",
            },
            strong: {
              color: "inherit",
              fontWeight: 500,
            },
            thead: {
              color: "inherit",
              fontWeight: 500,
            },
            h1: {
              ...generateTypography("6Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h2: {
              ...generateTypography("4Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h3: {
              ...generateTypography("2Xl", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h4: {
              ...generateTypography("xlBolder", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h5: {
              ...generateTypography("base", theme),
              color: theme("colors.light['on-background'].900"),
            },
            h6: {
              ...generateTypography("smBolder", theme),
              color: theme("colors.light['on-background'].900"),
            },
            pre: {
              backgroundColor: theme("colors.primary.100"),
              color: theme("colors.light['on-background'].900"),
              padding: "1rem",
            },
            code: {
              backgroundColor: theme("colors.primary.100"),
            },
            "code:before, code:after": {
              content: "",
            },
            blockquote: {
              backgroundColor: theme("colors.light['on-background'].100"),
              color: theme("colors.light['on-background'].900"),
              p: {
                paddingTop: "1rem",
                paddingRight: "0.5rem",
              },
            },
            "ul >li:before": {
              content: "-",
            },
            a: {
              color: theme("colors.light['on-background'].900"),
              cursor: "pointer",
            },
          },
        },
      }),
    },
    fontFace: {
      "Neue Montreal": [
        {
          filename: "NeueMontreal-Regular",
          style: "normal",
          weight: 400,
          display: "swap",
        },
        {
          filename: "NeueMontreal-Italic",
          style: "italic",
          weight: 400,
          display: "swap",
        },
        {
          filename: "NeueMontreal-Medium",
          style: "normal",
          weight: 500,
          display: "swap",
        },
        {
          filename: "NeueMontreal-MediumItalic",
          style: "italic",
          weight: 500,
          display: "swap",
        },
        {
          filename: "NeueMontreal Regular ",
        },
      ],
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("./tailwindPlugins/font-face")(),
  ],
};

module.exports = conf;
